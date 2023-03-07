import React from 'react';
import './About.css'

interface AboutProps {
  
}

const About: React.FC<AboutProps> = () => {
  return (
    <section className='about'>
      <div className='about_container'>
        <p className='about_title'>люди</p>
        <p className='about_context'>
          люди хорошие, на три строки напишу насоклькоб самые честыне, добрые, светлые, понявшие, принявшие
        </p>
      </div>  
      <div className='about_container'>
        <p className='about_title'>продукт</p>
        <p className='about_context'>
          продукт хороший, на три строки напишу насоклько, еще пара слов, еще чуть чуть
        </p>
      </div>  
      <div className='about_container'>
        <p className='about_title'>история</p>
        <p className='about_context'>
          история важна, здесь будет наша. люди не помнящие истории повторяют ошибки предков
        </p>
      </div>  
    </section>
  )
}

export default About;