import React from 'react';
import { Link } from 'react-router-dom';
import './Stores.css'
import coffeeShop_1 from '../../images/park_2.jpg'
import coffeeShop_2 from '../../images/park_1.jpg'
import coffeeShop_3 from '../../images/mayak_2.jpg'
import coffeeShop_4 from '../../images/mayak_1.jpg'
import coffeeShop_5 from '../../images/mayak_3.jpg'

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
          <h3 className='store__legend box6'>Парк Победы</h3>
          <Link to='/mayak' className='box3'>
            <img src={coffeeShop_3} alt="" className='stores__photo'/>
          </Link>
          <Link to='/mayak' className='box4'>
            <img src={coffeeShop_4} alt="" className='stores__photo'/>
          </Link>
          <Link to='/mayak' className='box5'>
            <img src={coffeeShop_5} alt="" className='stores__photo'/>
          </Link>
          <h3 className='store__legend box7'>Маяковская</h3>
        </div>
      </div>
      
    </section>
  )
}

export default Stores;