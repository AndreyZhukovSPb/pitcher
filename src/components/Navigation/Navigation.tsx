import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import MobileMenu from '../MobileMenu/MobileMenu'

      
interface navigationProps {
  firstTitle: string,
  secondTitle: string,
  fisrtLink: string,
  secondLink: string,
  isMayak?: boolean,
  isPark?: boolean,
  isMain?: boolean,
  isForBurger: boolean,
  isContacts?: boolean
}

const Navigation: React.FC <navigationProps> = ({isContacts, firstTitle, secondTitle, fisrtLink, secondLink, isMayak, isPark, isMain, isForBurger}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  function handleBurgerClick() {
    setIsMenuOpen(true)
  }

  function handleCloseMenu() {
    setIsMenuOpen(false)
  }
  
  return (    
    <>
      <nav className={`navigation`}>
          <Link to={fisrtLink} className={`navigation__link ${isPark ? 'navigation__link_active' : ''} ${isMain ? 'navigation__link_type_main' : ''}`}>{firstTitle}</Link>
          <Link to={secondLink} className={`navigation__link ${isMayak ? 'navigation__link_active' : ''} ${isMain ? 'navigation__link_type_main' : ''}`}>{secondTitle}</Link>
          <button onClick={handleBurgerClick} className={`navigation__button ${isForBurger ? 'navigation__button_active' : ''} ${!isMain ? 'navigation__button_type_store' : ''}`}></button>
      </nav>
      <MobileMenu
        isMobileMenuVisible={isMenuOpen}
        onCloseClick={handleCloseMenu}
        isMayak={isMayak}
        isPark={isPark}
        isMain={isMain}
        isContacts={isContacts}
      />
    </>
  )
}
      
export default Navigation;

