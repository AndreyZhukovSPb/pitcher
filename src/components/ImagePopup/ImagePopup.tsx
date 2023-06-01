import React from 'react';
import './ImagePopup.css'
import { useState, useEffect, useRef } from 'react'

interface MyType {
    id: number,
    image: string,
    cols: number,
    rows: number
}

interface ImagePopupProps {
  isOpen: boolean,
  item: string,
  onClose: () => void,
  arrayOfImages: Array<MyType> 
}
//const ImagePopup: React.FC<ImagePopupProps> = (isOpen, item, onClose = () => {}) => {
const ImagePopup: React.FC<ImagePopupProps> = ( {arrayOfImages, isOpen, item, onClose = () => {}} ) => {
  /* const [currentPhoto, setCurrentPhoto] = React.useState<string>('');
  // const [isPopupOpen, setIsPopupOpen] = React.useState<boolean>(false);
  function closePopup() {
    // console.log(item)
    onClose();
    //setIsPopupOpen(false)
    //console.log(isOpen)
    //console.log('tets')
    // setCurrentPhoto('');
  }
  useEffect(() => {
    if (isPopupOpen) {
      setIsOpen(true);
    } else {
      return;
    }
  }, [isPopupOpen]);
  useEffect(() => {
    console.log(isOpen);
    // console.log(item)
    setIsPopupOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    // console.log(isOpen.isOpen)
    console.log(item);
    //setIsPopupOpen(isOpen.isOpen)
  }, [item]);
  */

  const [leftButtonIsVisible, setLeftButtonIsVisible] = React.useState<boolean>(true);
  const [rightButtonIsVisible, setRightButtonIsVisible] = React.useState<boolean>(true);
  const [currentImage, setCurrentImage] = React.useState<string>('');
  const overlayRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentImage === '') {
      return
    } else {  
      document.addEventListener("keydown", handleKeyDown);
    }
    function handleKeyDown(e: any) {
      keyDownHandler(e)
    }
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImage]);

  useEffect(() => {
    if(!item || !arrayOfImages) {
      return
    }
    setCurrentImage(item)
    // checkVisibility(mayakImages.findIndex(image => image.image === item))
    checkVisibility(arrayOfImages.findIndex(image => image.image === item))
  }, [item]);

  function handleClose() {
    setLeftButtonIsVisible(true);
    setRightButtonIsVisible(true);
    setCurrentImage('')
    onClose();
  }

  function updatePhopo(message: string, index: number) {
    // let newOne = mayakImages.findIndex(image => image.image === message); 
    let newOne = arrayOfImages.findIndex(image => image.image === message); 
    // setCurrentImage(mayakImages[newOne + index].image)
    setCurrentImage(arrayOfImages[newOne + index].image)
    checkVisibility(newOne + index)
  }

  function checkVisibility(index: number) {
    if (index < 1) {
      setLeftButtonIsVisible(false);
    // } else if (index >= mayakImages.length - 1) {
    } else if (index >= arrayOfImages.length - 1) {      
      setRightButtonIsVisible(false)
    } else {
      if (!leftButtonIsVisible) {
        setLeftButtonIsVisible(true);
      }
      if (!rightButtonIsVisible) {
        setRightButtonIsVisible(true)
      }
    }
  }

  function keyDownHandler(event: any) {
    if (event.keyCode === 27) {
      handleClose();
    }
    if (event.keyCode === 37) {
      if(!leftButtonIsVisible) {
        return
      }
      updatePhopo(currentImage, -1);
    } else if (event.keyCode === 39) {
      if (!rightButtonIsVisible) {
        return
      }
      updatePhopo(currentImage, 1);
    } else {
      return
    }
  }

  function handleCheckIsOverlay(e: any) {
    if (!overlayRef.current || e.target.contains(overlayRef.current)) {
      handleClose()
    } 
  }

  return (
    <section
      onClick={handleCheckIsOverlay}
      ref={overlayRef}
      className={`popup popup_type_element-photo ${
        isOpen && item ? "popup_opened" : ""
      }`}
      // onKeyDown={(event) => keyDownHandler(event)}
      
    >
      <div className="popup__photo-container">
        <img className="popup__photo" src={currentImage} alt="фото кофейни" />
      </div>
      <button
        aria-label="Close"
        type="button"
        className="popup__close-button"
        onClick={handleClose}
      ></button>
      <button
        className={`popup__wrapButton popup__wrapButton_type_prev ${
          !leftButtonIsVisible ? "popup__wrapButton_hidden" : ""
        }`}
        onClick={() => {
          updatePhopo(currentImage, -1);
        }}
      ></button>
      <button
        className={`popup__wrapButton popup__wrapButton_type_next ${
          !rightButtonIsVisible ? "popup__wrapButton_hidden" : ""
        }`}
        onClick={() => {
          updatePhopo(currentImage, 1);
          // setCounter((counter) => (counter = counter + 1));
        }}
      ></button>

    </section>
  );
}
  
export default ImagePopup;

/*
лево 37
право 39
*/