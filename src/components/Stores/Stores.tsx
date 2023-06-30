import React from 'react';
import { Link } from 'react-router-dom';
import './Stores.css'
import coffeeShop_1 from '../../images/Park_16.jpg'
import coffeeShop_2 from '../../images/Park_11.jpg'
import coffeeShop_3 from '../../images/Mayak_3.jpg'
import coffeeShop_4 from '../../images/Mayak_10.JPG'
import coffeeShop_5 from '../../images/Mayak_17.JPG'

interface StoresProps {
  
}

const Stores: React.FC<StoresProps> = () => {
  return (
    <section className='stores'>
      <div className='stores__container'>
        <h2 className='stores__title'>Территория Pitcher</h2>
        <div className='stores__grid'>
          <Link to='/park' className='box1'>
            <img src={coffeeShop_1} alt="" className='stores__photo'/>
          </Link>
          <Link to='/park' className='box2'>
            <img src={coffeeShop_2} alt="" className='stores__photo'/>
          </Link>
          <a className='store__legend box6' href='/park'>м Парк Победы: улица Бассейная, 12</a>  
          <Link to='/mayak' className='box3'>
            <img src={coffeeShop_3} alt="" className='stores__photo'/>
          </Link>
          <Link to='/mayak' className='box4'>
            <img src={coffeeShop_4} alt="" className='stores__photo'/>
          </Link>
          <Link to='/mayak' className='box5'>
            <img src={coffeeShop_5} alt="" className='stores__photo'/>
          </Link>
          <a className='store__legend box7' href='/mayak'>м Маяковская: улица Марата, 2</a>  
        </div>
      </div>
      
    </section>
  )
}

export default Stores;