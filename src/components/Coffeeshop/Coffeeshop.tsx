import React from 'react';
import './Coffeeshop.css';
import menu from '../../images/menu_new.png';
import { mayakImages } from '../../utils/constants';
import { ImageList, ImageListItem } from '@mui/material';
import {useRef, useState, useEffect} from 'react'
import useViewportSizes from 'use-viewport-sizes'
import Footer from '../../components/Footer/Footer';

interface coffeeshopProps {
  // logMessage: () => void;
}

const Coffeeshop: React.FC<coffeeshopProps> = () => {
  const [vpWidth] = useViewportSizes({ dimension: 'w' });

  const [currentSize, setCurrentSize] = React.useState<number>()  
  console.log(currentSize)

  function test() {
    console.log('test')
  }

  useEffect(() => {
    setCurrentSize(window.screen.width / 6.734)
    // setCurrentSize(vpWidth / 6.734)
  }, [window.screen.width])


  return (
    <section className="coffeeshop">
      <div className="coffeeshop__infoContainer">
        <img src={menu} alt="меню" className="coffeeshop__menu"/>
        <div className="coffeeshop__info">
          <p className="coffeeshop__content">м Парк победы. Бассейная 12. </p>
          <p className="coffeeshop__content">
            Режим работы: Пн-Пт: 8:00-22:00; Сб-Вс: 9:00-22:00
          </p>
          <p className="coffeeshop__content">
            Первая кофейня PITCHER. Здесь все началось. Надеюсь что потом допишу
            3 абзаца текста. Надеюсь что потом допишу 3 абзаца текста. Надеюсь
            что потом допишу 3 абзаца текста. Надеюсь что потом допишу 3 абзаца
            текста. Надеюсь что потом допишу 3 абзаца текста. Надеюсь что потом
            допишу 3 абзаца текста. Надеюсь что потом допишу 3 абзаца текста.
            Надеюсь что потом допишу 3 абзаца текста. Надеюсь что потом допишу 3
            абзаца текста
          </p>
        </div>
        <div className="coffeeshop__map">
          <iframe
            className="coffeeshop__iframe"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae3cfb7218df9db2d09a1864e7174f01d12e0d6df1cc0672b3ed2c068cb099efe&amp;source=constructor"
            title="2"
          ></iframe>
        </div>
      </div>
      <div className="coffeeshop__gallery">
        <ImageList
          // sx={{ height: 100vh }}
          variant="quilted"
          cols={6}
          // rowHeight='auto'
          rowHeight={currentSize}
          gap={12}
        >
          {mayakImages.map((item) => (
            <ImageListItem
              key={item.image}
              cols={item.cols || 1}
              rows={item.rows || 1}
              onClick={test}
            >
              <img
                // {...srcset(item.image, 121, item.rows, item.cols)}
                src={item.image}
                alt={item.image}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <Footer/>
    </section>
  );
}

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

<div 
        id="my_nanogallery2" 
        data-nanogallery2='{"thumbnailHeight": 150, "thumbnailWidth": 150, "itemsBaseURL": "https://nanogallery2.nanostudio.org/samples/"}'>


        <a href={mayak_v_1}>Title Image 2
          <img src={mayak_v_1}/>
        </a>
        <a href={mayak_v_1}>Title Image 2
          <img src={mayak_v_1}/>
        </a>
        <a href={mayak_v_1}>Title Image 3
          <img src={mayak_v_1}/>
        </a>
      </div>  
*/