
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
    <div className={`carousel__item carousel__item_type_${color}`}>
      {children}
    </div>
  )
}

export const CarouselBox: React.FC<{}> = () => {

  

  // const [initialSellPictures, setInitialSellPictures] = React.useState<any[]>(sellPictures);
  const [currentSellPictures, setCurrentSellPictures] = React.useState<Array<{
    pictureId: number,
    image: string,
    text: string,
    color: string
  }>>(sellPictures);

  
  console.log(currentSellPictures)

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

  return (
    <Carousel
    addPictureToStart = {addPictureToStart}
    addPictureToEnd = {addPictureToEnd}
    >

      {currentSellPictures.map((item) => (
          <CarouselItem key={item.pictureId} color={item.color}>
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
  addPictureToStart: any;
  addPictureToEnd: any;
}



const Carousel: React.FC<carouselProps> = ({children, addPictureToStart, addPictureToEnd}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1)
    }, 3000)

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  }) 
  */
  

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      return;
      //addPictureToStart();
      // newIndex = sellPictures.length - 1
      // setActiveIndex(newIndex)
      // updateIndex(newIndex);
      
      // newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      addPictureToEnd();
      // newIndex = 0;

    } 
    setActiveIndex(newIndex)
    
  }

  return (
    <div className="carousel">
      <div 
        className="carousel__inner" 
        style={{ transform: `translateX(-${activeIndex*100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child)
        })}
      </div>
      <button 
          className="carousel__wrapButton carousel__wrapButton_type_prev"
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
          Prev
        </button>
        <button
          className="carousel__wrapButton carousel__wrapButton_type_next"
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          Next
        </button>
      
    </div>
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
*/