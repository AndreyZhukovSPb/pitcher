import './Photo.css'
import React, {useState, useEffect} from "react";

interface photoProps {
  image: string,
  type: string,
  key: string,
  videoImage?: string
}

const Photo: React.FC<photoProps> = ({image, type, key, videoImage}) => {
  if (type === 'IMAGE' || type === 'CAROUSEL_ALBUM' ) {
    return (
        <img src={image} alt="foto from insta" className='contentItem' />
    )
  } else if (type === 'VIDEO') {
    return (
      <img src={videoImage} alt="foto from insta" className='contentItem' />
    )
  } else {
    return (
      <div></div>
    )
  }
  
  
}

export default Photo