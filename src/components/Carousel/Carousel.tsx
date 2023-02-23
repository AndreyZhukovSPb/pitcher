
import React, {useState, useEffect} from "react";
import './Carousel.css'
import { sellPictures } from "../../utils/constants"
import { Link } from 'react-router-dom';

interface carouselItemProps {
  children?: any;
  width?: string;
  color: string;
  image?: string;
  pictureId?: number;
  text?: string;
}

export const CarouselItem: React.FC<carouselItemProps> = ({children, width, color, image}) => {
  return (
    <div 
      className={`carousel__item carousel__item_type_${color}`}
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
    text: string,
    color: string
  }>>(sellPictures);



  return (
    <Carousel>
      {currentSellPictures.map((item) => (
          <CarouselItem key={item.pictureId} color={item.color} image={item.image}>
            <Link to='/shop'>
              <button className='carousel_button'>купить</button>
            </Link>
            <p className="carousel__text">
              {item.text}
            </p>
          </CarouselItem>
      ))} 
    </Carousel>
  )
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
    if (counter === sellPictures.length - 1) {
      console.log('break?')
      return;
    } else {
      const interval = setInterval(() => {
        setCounter((counter) => counter = counter +1 )
        updateIndex(activeIndex + 1)
      }, 2000)
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
          }}
        >
          
        </button>
      
    </section>
  )
}

export default Carousel;



/* 
      {sellPictures.map((item) => (
          <CarouselItem key={item.pictureId} color={item.color}>
            <Link to='/shop'>
              <button className='carousel_button'>купить</button>
            </Link>
            <p className="carousel__text">
              {item.text}
            </p>
          </CarouselItem>
      ))} 

        function addPictureToStart() {
    const newArr = sellPictures.map(item => ({
      pictureId: item.pictureId + currentSellPictures.length,
      image: item.image,
      text: item.text,
      color: item.color
    }))
    console.log(newArr);
    console.log(currentSellPictures);
    setCurrentSellPictures(prevState => [...newArr, ...prevState])
  }

  function addPictureToEnd() {
    const newArr = sellPictures.map(item => ({
      pictureId: item.pictureId + currentSellPictures.length,
      image: item.image,
      text: item.text,
      color: item.color
    }))
    console.log(newArr);
    console.log(currentSellPictures);
    setCurrentSellPictures(prevState => [...prevState, ...newArr])
  }

*/