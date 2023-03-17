import './Portfolio.css'
import InstaApi from '../../utils/InstaApi'
import React, {useState, useEffect} from "react";
import { temporaryPhotos } from '../../utils/constants';
import Photo from '../Photo/Photo';


interface ProfileProps {
  
}

const Portfolio: React.FC<ProfileProps> = () => {

  const [allPhoto, setallPhoto] = React.useState<Array<{
    id: string,
    media_type: string,
    media_url: string,
    caption: string,
    timestamp: string,
    permalink: string,
    thumbnail_url?: string
  }>>(temporaryPhotos);


useEffect(() => {
    InstaApi.getPhoto()
      .then(res => {
        // setallPhoto(prevState => [...prevState, ...res.data]) 
        //const initialContent = Array.from(res.data)
        // const contentWithoutVideo: object[] = initialContent
        // .filter((i: object) => {
        //  return i.media_type === 'IMAGE' || i.media_type === 'CAROUSEL_ALBUM')
        // }
        // setallPhoto(initialContent)
        setallPhoto(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Последние новости из жизни Picther</h2>
      <div className='portfolio__photoContainer'>
        {allPhoto.slice(0, 8).map((item) => (  
          <Photo
            key={item.id}
            image={item.media_url}
            type={item.media_type}
            videoImage={item.thumbnail_url}
            permalink={item.permalink}
          />
        ))}
      </div>
      
      
    </section>
  )
}

export default Portfolio;
// {allPhoto.filter(i=> i.media_type === 'IMAGE' || i.media_type === 'CAROUSEL_ALBUM').slice(0, 12).map((item) => (