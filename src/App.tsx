import React from 'react';
import { useState } from 'react';

import './App.css';
import './components/header/Header.css'
import Header from './components/header/Header';
import {CarouselBox} from './components/Carousel/Carousel';
import Stores from './components/Stores/Stores';
import About from './components/About/About';
import InstaApi from './utils/InstaApi';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const [isStore, setIsStore] = useState(false);

  return (
    <>
      <div className={`page ${isStore? 'page_type_white' : ''}`}>
        <Header 
          headerType='main_header'
        />
        <CarouselBox/>
        <Stores/>
        <About/>
        <Portfolio/>
      </div>
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
видос на главную?
конвертировать фотки
шрифт с блю ботл
выезжающая шапка как блю ботл
попробовать переписать апиинста чтобы был бади с токеном

token
IGQVJVb24zc0NPcFdnM3ZAlZA21WVHJTa3JIaG5yTFpHVGN0bUZABbWFERmN1cWtfYmtWNktiZAmozN3ZAHRm5hYWNGVjRPbWZAzRmd5NXFtZAnFPb1k0cGduZAjMxcDM1RklEb1dKNlkyR2xiWFJFUkVJMEtwWQZDZD

npm i cors - probably will be usefull
553648129
*/
