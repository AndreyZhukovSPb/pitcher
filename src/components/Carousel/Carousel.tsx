import React, {useState, useEffect} from "react";
import './Carousel.css'
import { sellPictures } from "../../utils/constants"
import { Link } from 'react-router-dom';
import Header from "../header/Header";

interface carouselItemProps {
  children?: any;
  image?: string;
}

export const CarouselItem: React.FC<carouselItemProps> = ({children, image}) => {
  return (
    <div 
      className='carousel__item'
    >
      <img src={image} alt="" className="carousel__image"/>
      {children}
    </div>
  )
}

export const CarouselBox: React.FC<{}> = () => {
  const [currentSellPictures, setCurrentSellPictures] = React.useState<Array<{
    pictureId: number,
    image: string,
    text_1: string,
    text_2: string,
    text_3: string,
    color: string,
    number: string,
  }>>(sellPictures);

  return (
    // <section className="box">
    <>
    <Header 
      headerType="main_header header__type_new" 
      isMain={true}
      />   
    <Carousel>
    
    
      {currentSellPictures.map((item) => (
        
        <CarouselItem key={item.pictureId} image={item.image}>
        
          <Link to="/shop">
            <button className="carousel_button">

            <p className="carousel_buttonText">купить</p>
            </button>
            
          </Link>
          <div className={`carousel__textContainer carousel__textContainer_type_${item.number}`}>
            <p className="carousel__text">{item.text_1}</p>
            <p className="carousel__text">{item.text_2}</p>
            <p className="carousel__text">{item.text_3}</p>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
    </>
    // </section>
    
  );
}

interface carouselProps {
  children: any;
}

const Carousel: React.FC<carouselProps> = ({children}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [counter, setCounter] = React.useState(0);
  const [leftButtonIsVisible, setLeftButtonIsVisible] = React.useState(false);
  const [rightButtonIsVisible, setRightButtonIsVisible] = React.useState(true);

  useEffect(() => {
    if (counter >= sellPictures.length - 1) {
      return;
    } else {
      const interval = setInterval(() => {
        setCounter((counter) => counter = counter +1 )
        updateIndex(activeIndex + 1)
      }, 3500)
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      }
    }
  }) 
  
  const updateIndex = (newIndex: number) => {
    setActiveIndex(newIndex)
    if (newIndex <= 0) {
      setLeftButtonIsVisible(false)
      return;
    } else if (newIndex >= React.Children.count(children) -1 ) {
      setRightButtonIsVisible(false)
    } else {
      if (!leftButtonIsVisible) {
        setLeftButtonIsVisible(true)
      }
      if (!rightButtonIsVisible) {
        setRightButtonIsVisible(true)
      }
      
    }
  }

  return (
    <section className="carousel">
      <div 
        className="carousel__inner" 
        style={{ transform: `translateX(-${activeIndex*100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child)
        })}
      </div>
      <button 
          className={`carousel__wrapButton carousel__wrapButton_type_prev ${!leftButtonIsVisible ? 'carousel__wrapButton_hidden' : ''}`}
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
        </button>
        <button
          className={`carousel__wrapButton carousel__wrapButton_type_next ${!rightButtonIsVisible ? 'carousel__wrapButton_hidden' : ''}`}
          onClick={() => {
            updateIndex(activeIndex + 1)
            setCounter((counter) => counter = counter +1 )
          }}
        > 
        </button>
      
    </section>
  )
}

export default Carousel;
