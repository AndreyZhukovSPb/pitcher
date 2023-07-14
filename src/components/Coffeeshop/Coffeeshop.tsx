import React from "react";
import "./Coffeeshop.css";
// import menu from '../../images/Menu_Park.png';
import menu from "../../images/nemu_v_1.jpeg";
import {
  ImageList,
  ImageListItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState, useEffect } from "react";
import useViewportSizes from "use-viewport-sizes";
import Footer from "../../components/Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import {
  mayakImages,
  parkImages,
  dataMayak,
  dataPark,
  mayakImagesMobile,
  parkImagesMobile,
} from "../../utils/constants";
import SectionLine from "../SectionLine/SectionLine";
import Team from "../Team/Team";
import Api from "../../utils/MainApi";
import { useMediaQuery } from "react-responsive";
import { MyTypeImage } from "../SharedTypes/SharedTypes"

interface coffeeshopProps {
  isMayak: boolean;
  isPark: boolean;
}

const Coffeeshop: React.FC<coffeeshopProps> = ({ isPark, isMayak }) => {
  const [vpWidth] = useViewportSizes({ dimension: "w" });
  const [currentSize, setCurrentSize] = React.useState<number>();
  const [isPopupOpen, setIsPopupOpen] = React.useState<boolean>(false);
  const [currentPhoto, setCurrentPhoto] = React.useState<string>("");

  const isTablet = useMediaQuery({
    query: `(max-width: 899px) and (min-width: 768px)`,
  });
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const isSmallMobile = useMediaQuery({ query: `(max-width: 599px)` });

  interface MyTypeSizeData {
    itemsToShow?: number;
    columnsToShow?: number;
    currentGap?: number;
  }

  interface MyTypeData {
    map?: string;
    map_tablet?: string;
    map_mobile?: string;
    title?: string;
    shcedule?: string;
    shcedule_tablet?: string;
    content_1?: string;
    content_1_tablet?: string;
    content_2?: string;
    content_2_tablet?: string;
    content_3?: string;
    content_4?: string;
  }

  const [currentSizeData, setCurrentSizeData] = React.useState<MyTypeSizeData>(
    {}
  );
  const [currentPictures, setCurrentPictures] = React.useState<
    Array<MyTypeImage>
  >([]);
  const [currentShopData, setCurrentShopData] = React.useState<MyTypeData>({});

  function setCoffeeShopData(
    imageArray: Array<MyTypeImage>,
    data: MyTypeData
  ) {
    setCurrentPictures(imageArray);
    setCurrentShopData(data);
  }

  function setSizeData(data: MyTypeSizeData) {
    setCurrentSizeData(data);
  }

  useEffect(() => {
    Api.getMayakPictures().then((res) => {
      console.log(res)
    });
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setSizeData({ itemsToShow: 16, columnsToShow: 6, currentGap: 6 });
      if (isMayak) {
        setCoffeeShopData(mayakImages, dataMayak);
      } else if (isPark) {
        setCoffeeShopData(parkImages, dataPark);
      }
    } else {
      setSizeData({ itemsToShow: 7, columnsToShow: 12, currentGap: 3 });
      if (isMayak) {
        setCoffeeShopData(mayakImagesMobile, dataMayak);
      } else if (isPark) {
        setCoffeeShopData(parkImagesMobile, dataPark);
      }
    }
  }, [isMobile, isPark, isMayak]);

  useEffect(() => {
    if (!isMobile) {
      setSizeData({ itemsToShow: 16, columnsToShow: 6, currentGap: 6 });
      if (isMayak) {
        setCoffeeShopData(mayakImages, dataMayak);
      } else if (isPark) {
        setCoffeeShopData(parkImages, dataPark);
      }
    } else {
      setSizeData({ itemsToShow: 7, columnsToShow: 12, currentGap: 3 });
      if (isMayak) {
        setCoffeeShopData(mayakImagesMobile, dataMayak);
      } else if (isPark) {
        setCoffeeShopData(parkImagesMobile, dataPark);
      }
    }
  }, [isMobile, isPark, isMayak]);

  useEffect(() => {
    setCurrentSize(window.screen.width / 6.734);
  }, [window.screen.width]);

  const theme = createTheme({
    components: {
      MuiImageListItem: {
        styleOverrides: {
          root: {
            "&:hover": {
              cursor: "pointer",
              opacity: 0.7,
              transition: "opacity 0.7s ease",
              boxShadow: "0 0 2px 3px rgba(0, 0, 0, 0.5)",
            },
          },
        },
      },
    },
  });

  function openPopup(image: string) {
    setCurrentPhoto(image);
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
    setCurrentPhoto("");
  }

  return (
    <>
      <section className="coffeeshop">
        <div className="coffeeshop__infoContainer">
          <img src={menu} alt="меню" className="coffeeshop__menu" />
          <div className="coffeeshop__info">
            <p className="coffeeshop__title">{currentShopData.title}</p>
            <p className="coffeeshop__title">
              {isTablet || isMobile
                ? currentShopData.shcedule_tablet
                : currentShopData.shcedule}
            </p>
            <p className="coffeeshop__content">
              {" "}
              {isTablet && isPark
                ? currentShopData.content_1_tablet
                : currentShopData.content_1}
            </p>
            <p
              className={`coffeeshop__content ${
                isPark && isTablet ? "coffeeshop__content_hidden" : ""
              }`}
            >
              {" "}
              {isMayak && isTablet
                ? currentShopData.content_2_tablet
                : currentShopData.content_2}
            </p>
            <p className="coffeeshop__content"> {currentShopData.content_3}</p>
            <p
              className={`coffeeshop__content ${
                isMayak && isTablet ? "coffeeshop__content_hidden" : ""
              }`}
            >
              {" "}
              {currentShopData.content_4}
            </p>
          </div>
          <div className="coffeeshop__map">
            <iframe
              className="coffeeshop__iframe"
              src={
                isTablet
                  ? currentShopData.map_tablet
                  : isSmallMobile
                  ? currentShopData.map_mobile
                  : currentShopData.map
              }
              title="2"
            ></iframe>
          </div>
        </div>
        <SectionLine />
        <div className="coffeeshop__gallery">
          <ImageList
            // sx={{ height: 100, width: 500 }}
            variant="quilted"
            cols={currentSizeData.columnsToShow}
            // rowHeight='auto'
            rowHeight={currentSize}
            gap={currentSizeData.currentGap}
          >
            {currentPictures
              .slice(0, currentSizeData.itemsToShow)
              .map((item) => (
                <ThemeProvider
                  theme={theme}
                  key={`${currentSizeData.itemsToShow} ${item.image}`}
                >
                  <ImageListItem
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                    onClick={() => {
                      openPopup(item.image);
                    }}
                    className="coffeeshop__picture"
                  >
                    <img
                      // {...srcset(item.image, 121, item.rows, item.cols)}
                      src={item.image}
                      alt={item.image}
                      loading="lazy"
                    />
                  </ImageListItem>
                </ThemeProvider>
              ))}
          </ImageList>
        </div>
        <SectionLine />
        <Team
          isPark={isPark}
          isMayak={isMayak}
        />
        <SectionLine />
        <Footer />
      </section>
      <ImagePopup
        isOpen={isPopupOpen}
        item={currentPhoto}
        onClose={closePopup}
        arrayOfImages={currentPictures}
      />
    </>
  );
};

export default Coffeeshop;

/*
  interface MyTypeImageArray {
    image: string;
    cols?: number;
    rows?: number;
  }

  const [currentPictures, setCurrentPictures] = React.useState<Array<{
    id?: number,
    image: string,
    cols: number,
    rows: number
  }>>([]);
  
  const [currentShopData, setCurrentShopData] = React.useState<{
    map?: string,
    map_tablet?: string,
    map_mobile?: string,
    title?: string,
    shcedule?: string,
    shcedule_tablet?: string,
    content_1?: string,
    content_1_tablet?: string,
    content_2?: string,
    content_2_tablet?: string,
    content_3?: string,
    content_4?: string
  }>({})

  useEffect(()=>{
    if (isMayak) {
      setCurrentPictures(mayakImages);
      setCurrentShopData(dataMayak);
    } else if (isPark) {
      setCurrentPictures(parkImages);
      setCurrentShopData(dataPark);
    } 
  }, [isPark, isMayak])
*/
