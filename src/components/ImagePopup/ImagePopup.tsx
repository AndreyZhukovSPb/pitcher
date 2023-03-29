import React from 'react';
import './ImagePopup.css'
import {useState, useEffect} from 'react'
import { mayakImages } from '../../utils/constants';


interface ImagePopupProps {
  isOpen: boolean,
  item: string,
  onClose: () => void,
}
//const ImagePopup: React.FC<ImagePopupProps> = (isOpen, item, onClose = () => {}) => {
const ImagePopup: React.FC<ImagePopupProps> = ( {isOpen, item, onClose = () => {}} ) => {
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

  useEffect(() => {
    if(!item) {
      return
    }
    setCurrentImage(item)
    checkVisibility(mayakImages.findIndex(image => image.image === item))
  }, [item]);


  function updatePhopo(message: string, index: number) {
    console.log(message)
    let newOne = mayakImages.findIndex(image => image.image === message); 
    setCurrentImage(mayakImages[newOne + index].image)
    console.log(newOne)
    checkVisibility(newOne + index)
  }

  function checkVisibility(index: number) {
    if (index < 1) {
      setLeftButtonIsVisible(false);
    } else if (index >= mayakImages.length - 1) {
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

  return (
    <section
      className={`popup popup_type_element-photo ${
        isOpen && item ? "popup_opened" : ""
      }`}
    >
      <div className="popup__photo-container">
        <img className="popup__photo" src={currentImage} alt="фото кофейни" />
      </div>
      <button
        aria-label="Close"
        type="button"
        className="popup__close-button"
        onClick={onClose}
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
*/