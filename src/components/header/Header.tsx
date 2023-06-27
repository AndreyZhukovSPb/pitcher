import React from 'react';
// import logo1 from '../../images/logo-new.svg';
import logo1 from '../../images/logo-new.svg';
import logo2 from '../../images/logo_mobile.svg';
import logo3 from '../../images/logo_mobile_v_2.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

interface headerProps {
  headerType: string,
  onClick?: () => void,
  isPark? : boolean,
  isMayak?: boolean,
  isMain?: boolean,
  isContacts?: boolean
}

const Header: React.FC<headerProps> = ({headerType, isMayak, isPark, isMain, isContacts}) => {
  return (
      <header className = {`header ${headerType}`}>
        <Navigation
          firstTitle='Онлайн-магазин'
          secondTitle='Гайд по завариванию'
          fisrtLink='/shop'
          secondLink='/guide'
          isMain={isMain}
          isForBurger={false}
        />
        <Link to='/'>
          <img src={logo1} alt="logo" className={`header__logo ${isMain ? 'header__logo_type_main' : ''}`}/>
          <img src={logo2} alt="logo" className={`header__logo header__logo_mobile ${isMain ? 'header__logo_type_main' : ''}`}/>
        </Link>
        <Navigation
          firstTitle='Парк Победы'
          secondTitle='Маяковская'
          fisrtLink='/park'
          secondLink='/mayak'
          isMayak={isMayak}
          isPark={isPark}
          isMain={isMain}
          isContacts={isContacts}
          isForBurger={true}
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