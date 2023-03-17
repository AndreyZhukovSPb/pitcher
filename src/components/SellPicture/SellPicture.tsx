import React from 'react';
import './SellPicture.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface sellPictureProps {

}

const SellPicture: React.FC<sellPictureProps> = () => {
  
  return (
      <section className='sellPicture'>
        <Link to='/shop'>
          <button className='sellPicture_button'></button>
        </Link>
        <div className='sellPicture__photo'>
        </div>  
      </section>
  )
}

export default SellPicture;

/* 
const Header = props => {
  const { isLoggedIn, className, onNavMenuClick } = props;

  return (
    <header className={cn("header", className)}>
      <Link to={'/'}>
        <img className="header__logo" src={headerLogo} alt="лого" />
      </Link>
      
      <Navigation
        isLoggedIn={isLoggedIn}
        onNavMenuClick={onNavMenuClick}
      />
    </header>
  );
}

export default Header;

*/