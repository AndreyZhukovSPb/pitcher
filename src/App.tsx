import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import './components/header/Header.css'
import Header from './components/header/Header';
import {CarouselBox} from './components/Carousel/Carousel';
import Stores from './components/Stores/Stores';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
// import { Switch } from 'react-router-dom';


function App() {
  const [isStore, setIsStore] = useState(false);

  return (
    <div className={`page ${isStore? 'page_type_white' : ''}`}>
      <Routes>
        <Route path="/" 
          element={
            <>
              <Header 
                headerType='main_header'
              />
              <CarouselBox/>
              <Stores/>
              <About/>
              <Portfolio/>
              <Footer/>
            </>
          }
        />
        <Route path="/park" 
          element={<></>}
        />
        
        
        
      </Routes>
    </div>
  );
}

export default App;

/* 
<SellPicture/> - del?
попап на открытие фото из инста?
кнопка еще

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
поставить в галерею инста по умолчанию другие фото 

token
IGQVJVb24zc0NPcFdnM3ZAlZA21WVHJTa3JIaG5yTFpHVGN0bUZABbWFERmN1cWtfYmtWNktiZAmozN3ZAHRm5hYWNGVjRPbWZAzRmd5NXFtZAnFPb1k0cGduZAjMxcDM1RklEb1dKNlkyR2xiWFJFUkVJMEtwWQZDZD

npm i cors - probably will be usefull
553648129
вынести константы
переписать фото чтобы все было в одном условии


        <Route path='/'>
          element={<Header headerType='main_header'/>}


          <Header 
            headerType='main_header'
          />
          <CarouselBox/>
          <Stores/>
          <About/>
          <Portfolio/>
          <Footer/>
        </Route>
*/
