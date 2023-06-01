import React from 'react';
import './About.css'
import icon_coffee from '../../images/icon_coffee.png';
import icon_ninja from '../../images/icon_ninja.png';
import icon_trust from '../../images/icon_trust.png';


interface AboutProps {
  
}

const About: React.FC<AboutProps> = () => {
  return (
    <section className='about'>
      <div className='about__container'>
        <img src={icon_coffee} alt="иконка кофе" className='about__title'/>
        <div className='about__contextContainer'>
          <p className='about__context'>
            specialty Кофе - это необъятный мир вкусов и ароматов. 
          </p>
          <p className='about__context'>
            Природа подарила нам удивительное разнообразие, которое мы бережно сохраняем и раскрываем. 
          </p>
          <p className='about__context'>
            Мы тщательно отбираем зеленое зерно, ответственно ищем оптимальный профиль обжарки, тестируем как готовится напиток на разных температурах, очищаем и минералузем воду которую используем в кофейнях.
          </p>
          <p className='about__context'>
            Вам необязательно все это знать, главное, что в результате каждый день наши гости пьют удивительно вкусный кофе.  
          </p>
        </div>
      </div>  
      <div className='about__container'>
        <img src={icon_ninja} alt="иконка ниндзя" className='about__title'/>
        <div className='about__contextContainer'>
          <p className='about__context'>
            В основе нашего подхода к построению отношений с людьми лежит уважение и забота.
          </p>
          <p className='about__context'>
            Мы невероятно долго ищем хороших ребят, которые любят людей и кофе. Бариста - это основа PICTHER, это наша гордость и радость. А в свободное время мы играем в настолки, массово разводим котов, спасаем птиц и радуемся жизни
          </p>
          <p className='about__context'>
            С первого дня работы мы работаем для каждого гостя как для лучшего друга. Нам важно, какой опыт вы получаете приходя в кофейни.
          </p>
          <p className='about__context'>
            Мы помним напитки гостей, знаем детей, кормим собак просто потому, что нам это нравится.
          </p>
        </div>
      </div>  
      <div className='about__container'>
        <img src={icon_trust} alt="иконка доверие" className='about__title'/>
        <div className='about__contextContainer'>
          <p className='about__context'>
            Путешествие PICTHER началось В 2014 году.
          </p>
          <p className='about__context'>
            Мы сильно поменялись за это время: улучшили оборудование на котором мы готовим, запустили собственную обжарка, дрип кофе и cold brew, несколько раз поменляи барные стойки и создали стабильную команду
          </p>
          <p className='about__context'>
            Мы много работали и гордимся результатами, гордимся что наши гости каждый день выбирают PITCHER.
          </p>
          <p className='about__context'>
            Если по стечению обстоятельств мы с вами еще не знакомы, то вы можете найти нас и отзывы гостей на всех популярных ресурсах. приходите, мы подружимся
          </p>
        </div>
        
      </div>  
    </section>
  )
}

export default About;