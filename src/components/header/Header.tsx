import React from 'react';
// import logo1 from '../../images/logo-new.svg';
import logo1 from '../../images/logo-new.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

interface headerProps {
  headerType: string,
  onClick?: () => void,
}

const Header: React.FC<headerProps> = ({headerType}) => {
  return (
      <header className = {`header ${headerType}`}>
        <Navigation
          firstTitle='Онлайн-магазин'
          secondTitle='Гайд по завариванию'
          fisrtLink='/shop'
          secondLink='/guide'
        />
        <Link to='/'>
          <img src={logo1} alt="logo" className="header_logo"/>
        </Link>
        <Navigation
          firstTitle='Парк Победы'
          secondTitle='Маяковская'
          fisrtLink='/park'
          secondLink='/mayak'
        />
      </header>
  )
}

export default Header;

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