import React from 'react';
import './About.css'
import icon_coffee from '../../images/icon_coffee.png';
import icon_ninja from '../../images/icon_ninja.png';
import icon_trust from '../../images/icon_trust.png';
import { useMediaQuery } from 'react-responsive';
import { aboutTexts } from '../../utils/constants'


interface AboutProps {
  
}

const About: React.FC<AboutProps> = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 589px)` });

  return (
    <section className="about-box">
      <div className="about">
        <div className="about__box">
          <div className="about__container">
            <img src={icon_coffee} alt="иконка кофе" className="about__title" />
            <div className="about__contextContainer">
              <p className="about__context">
                {!isMobile? aboutTexts.p_1_1_desctop : aboutTexts.p_1_1_mobile}
              </p>
              <p className="about__context">
                {!isMobile? aboutTexts.p_1_2_desctop : aboutTexts.p_1_2_mobile}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_1_3_desctop}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_1_4_desctop}
              </p>
            </div>
          </div>
          <div className="about__container">
            <img
              src={icon_ninja}
              alt="иконка ниндзя"
              className="about__title"
            />
            <div className="about__contextContainer">
              <p className="about__context">
                {!isMobile? aboutTexts.p_2_1_desctop : aboutTexts.p_2_1_mobile}
              </p>
              <p className="about__context">
                {!isMobile? aboutTexts.p_2_2_desctop : aboutTexts.p_2_2_mobile}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_2_3_desctop}
              </p>
              <p className="about__context about__context_type_mobile" >
                {aboutTexts.p_2_4_desctop}
              </p>
            </div>
          </div>
          <div className="about__container">
            <img
              src={icon_trust}
              alt="иконка доверие"
              className="about__title"
            />
            <div className="about__contextContainer">
              <p className="about__context">
                {!isMobile? aboutTexts.p_3_1_desctop : aboutTexts.p_3_1_mobile}
              </p>
              <p className="about__context">
                {!isMobile? aboutTexts.p_3_2_desctop : aboutTexts.p_3_2_mobile}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_3_3_desctop}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_3_4_desctop}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


/* 
<div className="about__container">
            <img src={icon_coffee} alt="иконка кофе" className="about__title" />
            <div className="about__contextContainer">
              <p className="about__context about__context_type_mobile">
                specialty кофе - это необъятный мир вкусов и ароматов со всего мира.
              </p>
              <p className="about__context">
                Природа подарила нам удивительное разнообразие, которое мы
                бережно сохраняем и раскрываем.
              </p>
              <p className="about__context">
                Мы тщательно отбираем зеленое зерно, ответственно ищем
                оптимальный профиль обжарки, тестируем как готовится напиток на
                разных температурах, очищаем и минералузем воду которую
                используем в кофейнях.
              </p>
              <p className="about__context">
                Вам необязательно все это знать, главное, что в результате
                каждый день наши гости пьют удивительно вкусный кофе.
              </p>
            </div>
          </div>
          <div className="about__container">
            <img
              src={icon_ninja}
              alt="иконка ниндзя"
              className="about__title"
            />
            <div className="about__contextContainer">
              <p className="about__context">
                В основе нашего подхода к построению отношений с людьми лежит
                уважение и забота.
              </p>
              <p className="about__context">
                Мы невероятно долго ищем хороших ребят, которые любят людей и
                кофе. Бариста - это основа PICTHER, это наша гордость и радость.
                А в свободное время мы играем в настолки, массово разводим
                котов, спасаем птиц и радуемся жизни
              </p>
              <p className="about__context">
                С первого дня работы мы работаем для каждого гостя как для
                лучшего друга. Нам важно, какой опыт вы получаете приходя в
                кофейни.
              </p>
              <p className="about__context">
                Мы помним напитки гостей, знаем детей, кормим собак просто
                потому, что нам это нравится.
              </p>
            </div>
          </div>
          <div className="about__container">
            <img
              src={icon_trust}
              alt="иконка доверие"
              className="about__title"
            />
            <div className="about__contextContainer">
              <p className="about__context">
                История путешествия PICTHER началась в 2014 году.
              </p>
              <p className="about__context">
                Мы сильно поменялись за это время: улучшили оборудование,
                запустили собственную обжарку, дрип кофе и cold brew, несколько
                раз поменляи барные стойки и создали стабильную команду
              </p>
              <p className="about__context">
                Мы много работали и гордимся результатами, гордимся что наши
                гости каждый день выбирают PITCHER.
              </p>
              <p className="about__context">
                Если по стечению обстоятельств мы с вами еще не знакомы, то вы
                можете найти нас и отзывы гостей на всех популярных ресурсах.
                приходите, мы подружимся
              </p>
            </div>
          </div>
*/