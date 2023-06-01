import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
      
interface navigationProps {
  firstTitle: string,
  secondTitle: string,
  fisrtLink: string,
  secondLink: string,
  isMayak?: boolean,
  isPark?: boolean,
  isMain?: boolean
}

const Navigation: React.FC <navigationProps> = ({firstTitle, secondTitle, fisrtLink, secondLink, isMayak, isPark, isMain}) => {
  return (    
      <nav className="navigation">
          <Link to={fisrtLink} className={`navigation__link ${isPark ? 'navigation__link_active' : ''} ${isMain ? 'navigation__link_type_main' : ''}`}>{firstTitle}</Link>
          <Link to={secondLink} className={`navigation__link ${isMayak ? 'navigation__link_active' : ''} ${isMain ? 'navigation__link_type_main' : ''}`}>{secondTitle}</Link>
      </nav>
  )
}
      
export default Navigation;

