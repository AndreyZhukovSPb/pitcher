import React from 'react';
import './Coffeeshop.css';
import menu from '../../images/menu_new.png';
import { ImageList, ImageListItem, createTheme, ThemeProvider } from '@mui/material';
import {useState, useEffect} from 'react'
import useViewportSizes from 'use-viewport-sizes'
import Footer from '../../components/Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';
import { mayakImages, parkImages, dataMayak, dataPark } from '../../utils/constants'
import SectionLine from '../SectionLine/SectionLine';

interface coffeeshopProps {
  isMayak: boolean
  isPark: boolean
}

const Coffeeshop: React.FC<coffeeshopProps> = ( {isMayak, isPark = () => {}} ) => {  
  const [vpWidth] = useViewportSizes({ dimension: "w" });
  const [currentSize, setCurrentSize] = React.useState<number>();
  const [isPopupOpen, setIsPopupOpen] = React.useState<boolean>(false);
  const [currentPhoto, setCurrentPhoto] = React.useState<string>('');

  const [currentPictures, setCurrentPictures] = React.useState<Array<{
    id: number,
    image: string,
    cols: number,
    rows: number
  }>>([]);

  const [currentShopData, setCurrentShopData] = React.useState<{
    map?: string,
    title?: string,
    shcedule?: string,
    content_1?: string,
    content_2?: string,
    content_3?: string,
    content_4?: string
  }>({})

  useEffect(() => {
    setCurrentSize(window.screen.width / 6.734);
  }, [window.screen.width]);
  
  useEffect(()=>{
    if (isMayak) {
      setCurrentPictures(mayakImages);
      setCurrentShopData(dataMayak);
    } else if (isPark) {
      setCurrentPictures(parkImages);
      setCurrentShopData(dataPark);
    } 
  }, [isPark, isMayak])

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
    setCurrentPhoto('')
  }

  // <p className="coffeeshop__content">м Парк победы. Бассейная 12. </p>

  return (
    <>
    <section 
      className="coffeeshop"
    >
      <div className="coffeeshop__infoContainer">
        <img src={menu} alt="меню" className="coffeeshop__menu" />
        <div className="coffeeshop__info">
          <p className="coffeeshop__title">{currentShopData.title}</p>
          <p className="coffeeshop__title">{currentShopData.shcedule}</p>
          <p className="coffeeshop__content"> {currentShopData.content_1}</p>
          <p className="coffeeshop__content"> {currentShopData.content_2}</p>
          <p className="coffeeshop__content"> {currentShopData.content_3}</p>
          <p className="coffeeshop__content"> {currentShopData.content_4}</p>
        </div>
        <div className="coffeeshop__map">
          <iframe
            className="coffeeshop__iframe"
            src={currentShopData.map}
            title="2"
          ></iframe>
        </div>
      </div>
      <SectionLine />
      <div className="coffeeshop__gallery">
        <ImageList
          // sx={{ height: 100, width: 500 }}
          variant="quilted"
          cols={6}
          // rowHeight='auto'
          rowHeight={currentSize}
          gap={6}
        >
          {currentPictures.map((item) => (
            <>
              <ThemeProvider theme={theme}>
                <ImageListItem
                  key={item.image}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                  onClick={() => { openPopup(item.image); }}
                >
                  <img
                    // {...srcset(item.image, 121, item.rows, item.cols)}
                    src={item.image}
                    alt={item.image}
                    loading="lazy"
                    
                  />
                </ImageListItem>
              </ThemeProvider>
            </>
          ))}
        </ImageList>
      </div>
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
<a 
            href="https://yandex.ru/maps/org/pitcher/1342893163/?utm_medium=mapframe&utm_source=maps" 
            className='coffeeshop__mapLink'
            
          >
            Pitcher
          </a>
          <a 
            href="https://yandex.ru/maps/2/saint-petersburg/category/coffee_shop/35193114937/?utm_medium=mapframe&utm_source=maps" 
            className='coffeeshop__mapLinkSecond'
            
          >
            Кофейня в Санкт‑Петербурге
          </a>
          <iframe 
            className='coffeeshop__iframe'
            src="https://yandex.ru/map-widget/v1/?ll=30.315006%2C59.866315&mode=poi&poi%5Bpoint%5D=30.314715%2C59.866157&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1342893163&z=18.81" 
            title='park map'
            width="560" 
            height="400" 
            
            // allowfullscreen="true" 
          >  
          </iframe>

          <iframe 
            className='coffeeshop__iframe'
            title='1'
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5058d6c2e30e12f09aa578a43fad99f62953d7f9986cc58a3caa1c4f228a6580&amp;source=constructor"
          ></iframe>

    МАЯК      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abc7e1b8cf696de268bec7da8fdd0fe431bfef2557c5033fb92b8abd51dc18a9c&amp;source=constructor" width="657" height="400" frameborder="0"></iframe>
*/