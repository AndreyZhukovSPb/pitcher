import {useState, useEffect} from 'react'
import React from 'react';
import { mayakImages, parkImages } from './constants';

export function setCurrentImages(isMayak: boolean) {
  if (isMayak) {
    return(mayakImages)
  } else {
    return(parkImages)
  }
}


/*
const setCurrentImages: React.FC<setCurrentImagesProps> = ( {isMayak, isPark = ()=>{}}) => {
// const Coffeeshop: React.FC<coffeeshopProps> = ( {isMayak, isPark = () => {}} ) => {  

  const [currentPictures, setCurrentPictures] = React.useState<Array<{
    id: number,
    image: string,
    cols: number,
    rows: number
  }>>([]);

  if (isMayak) {
    setCurrentPictures(mayakImages);
    console.log(mayakImages)
  } else if (isPark) {
    setCurrentPictures(parkImages);
  }
  return (currentPictures)
}
*/

// export default setCurrentImages

