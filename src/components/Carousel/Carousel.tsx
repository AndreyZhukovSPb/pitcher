import React, { useState, useEffect } from "react";
import "./Carousel.css";
// import { sellPictures, sellPicturesMobile } from "../../utils/constants";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { MyTypeMainPhoto } from "../SharedTypes/SharedTypes";
import { useMediaQuery } from "react-responsive";
import Api from '../../utils/MainApi'


interface carouselItemProps {
  children: any;
  image: string;
}

export const CarouselItem: React.FC<carouselItemProps> = ({
  children,
  image,
}) => {
  return (
    <div className="carousel__item">
      <img src={image} alt="" className="carousel__image" />
      {children}
    </div>
  );
};

interface carouselBoxProps {
  mainPictures: Array<MyTypeMainPhoto>
  mainPicturesMobile: Array<MyTypeMainPhoto>
}

export const CarouselBox: React.FC<carouselBoxProps> = ({mainPictures, mainPicturesMobile}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });

  const [currentSellPictures, setCurrentSellPictures] = React.useState<
    Array<MyTypeMainPhoto>
    >([]);

  useEffect(() => {
    if (isMobile) {
      setCurrentSellPictures(mainPicturesMobile);
    } else {
      setCurrentSellPictures(mainPictures);
    }
    }, [isMobile, mainPictures, mainPicturesMobile]);

  return (
    <>
      
      <Carousel>
        {currentSellPictures.map((item) => (
          <CarouselItem key={item.pictureId} image={item.image}>
            <Link to="/shop">
              <button className="carousel_button">
                <p className="carousel_buttonText">
                  {isMobile ? "перейти в магазин" : "купить"}
                </p>
              </button>
            </Link>
            <div
              className={`carousel__textContainer carousel__textContainer_type_${item.number}`}
            >
              <p className="carousel__text">{item.text_1}</p>
              <p className="carousel__text">{item.text_2}</p>
              <p className="carousel__text">{item.text_3}</p>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
};

interface carouselProps {
  children: any;
}

const Carousel: React.FC<carouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [counter, setCounter] = React.useState(0);
  const [leftButtonIsVisible, setLeftButtonIsVisible] = React.useState(false);
  const [rightButtonIsVisible, setRightButtonIsVisible] = React.useState(true);

  useEffect(() => {
    if (counter >= React.Children.count(children) - 1 || !rightButtonIsVisible) {
      return;
    } else {
      const interval = setInterval(() => {
        setCounter((counter) => (counter = counter + 1));
        updateIndex(activeIndex + 1);
      }, 3500);
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  });

  const updateIndex = (newIndex: number) => {
    setActiveIndex(newIndex);
    if (newIndex <= 0) {
      setLeftButtonIsVisible(false);
      return;
    } else if (newIndex >= React.Children.count(children) - 1) {
      setRightButtonIsVisible(false);
    } else {
      if (!leftButtonIsVisible) {
        setLeftButtonIsVisible(true);
      }
      if (!rightButtonIsVisible) {
        setRightButtonIsVisible(true);
      }
    }
  };

  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      if (!rightButtonIsVisible) {
        return;
      } else {
        updateIndex(activeIndex + 1);
      }
    }
    if (diff < -5) {
      if (!leftButtonIsVisible) {
        console.log("мотать некуда налево");
        return;
      } else {
        console.log("налево");
        console.log(currentTouch);
        updateIndex(activeIndex - 1);
      }
    }
    setTouchPosition(null);
  };

  return (
    <section className="carousel">
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child);
        })}
      </div>
      <button
        className={`carousel__wrapButton carousel__wrapButton_type_prev ${
          !leftButtonIsVisible ? "carousel__wrapButton_hidden" : ""
        }`}
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      ></button>
      <button
        className={`carousel__wrapButton carousel__wrapButton_type_next ${
          !rightButtonIsVisible ? "carousel__wrapButton_hidden" : ""
        }`}
        onClick={() => {
          updateIndex(activeIndex + 1);
          setCounter((counter) => (counter = counter + 1));
        }}
      ></button>
    </section>
  );
};

export default Carousel;


// export const CarouselBox: React.FC<{}> = () => {
  /*
  interface MyTypeMainPhoto {
    pictureId: number;
    image: string;
    text_1: string;
    text_2: string;
    text_3: string;
    number: string;
  }
  const [mainPictures, setMainPictures] = React.useState<
    Array<MyTypeMainPhoto>
    >([]);
  const [mainPicturesMobile, setMainPicturesMobile] = React.useState<
    Array<MyTypeMainPhoto>
    >([]);
    useEffect(() => {
    Api.getMainPhoto()
      .then((res) => {
        setMainPictures(res.desctopPhoto);
        setMainPicturesMobile(res.mobilePhoto);
        console.log(res.istaPhoto.data)
      })
  }, []);
  */ 
