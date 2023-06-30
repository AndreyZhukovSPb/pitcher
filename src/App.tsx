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
import Coffeeshop from './components/Coffeeshop/Coffeeshop';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SectionLine from './components/SectionLine/SectionLine';
import Contacts from './components/Contacts/Contacts';
// import { Switch } from 'react-router-dom';


function App() {
  const [isStore, setIsStore] = useState(false);
  // //<Header headerType="main_header" />
  
  return (
    <div className={`page ${isStore ? "page_type_white" : ""}`}>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CarouselBox />
                <Stores />
                <About />
                <Portfolio />
                <SectionLine
                  isMain={true}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <Header headerType="" isContacts={true}/>
                <SectionLine isMain={false} />
                <Contacts />
              </>
            }
          />
          <Route
            path="/park"
            element={
              <>
                <Header headerType="main_header" isPark={true} />
                <SectionLine isMain={false} />
                <Coffeeshop isMayak={false} isPark={true}/>
              </>
            }
          />
          <Route
            path="/mayak"
            element={
              <>
                <Header headerType="main_header" isMayak={true} />
                <SectionLine isMain={false} />
                <Coffeeshop isMayak={true} isPark={false}/>
              </>
            }
          />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;

/* 
<SellPicture/> - del?
кнопка еще
сделать чекбоксы индикаторы кружки сколько всего картинок и на какой находимся
сделать в карусели react-swipeable
проверить что будет если удалить custom.d.ts
что лежит в headerType?
типизировать useState, useEffect
переписать carouselProps - для функций
карусель разнести на несколько компонентов
видос на главную?
выезжающая шапка как блю ботл
попробовать переписать апиинста чтобы был бади с токеном
поставить в галерею инста по умолчанию другие фото 

token
IGQVJVb24zc0NPcFdnM3ZAlZA21WVHJTa3JIaG5yTFpHVGN0bUZABbWFERmN1cWtfYmtWNktiZAmozN3ZAHRm5hYWNGVjRPbWZAzRmd5NXFtZAnFPb1k0cGduZAjMxcDM1RklEb1dKNlkyR2xiWFJFUkVJMEtwWQZDZD

npm i cors - probably will be usefull
553648129
"homepage": "https://AndreyZhukovSPb.github.io/pitcher",
git push origin level-1     
    "typescript": "^5.1.6",
    "private": true,
    
*/

