import React from 'react';
import logo from './logo-new.svg';
import logo1 from './images/logo.svg';
import { useState } from 'react';

import './App.css';
import './components/header/Header.css'
import Header from './components/header/Header';
import Carousel, {CarouselItem, CarouselBox} from './components/Carousel/Carousel';



function App() {
  const [isStore, setIsStore] = useState(false);

  return (
    <>
      <div className={`page ${isStore? 'page_type_white' : ''}`}>
        <Header 
          headerType='main_header'
        />
      </div>
      <CarouselBox/>


    </>
  );
}

export default App;

/* 
<SellPicture/>
сделать чекбоксы индикаторы кружки сколько всего картинок и на какой находимся
сделать в карусели react-swipeable
менять color у page в стейте
импорт картинок переделать
шрифты поменять?
проверить что будет если удалить custom.d.ts
что лежит в headerType?
типизировать useState, useEffect
переписать carouselProps - для функций
карусель разнести на несколько компонентов
*/
