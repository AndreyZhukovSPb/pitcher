import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
      
interface navigationProps {
  firstTitle: string,
  secondTitle: string,
  fisrtLink: string,
  secondLink: string,
}

const Navigation: React.FC <navigationProps> = ({firstTitle, secondTitle, fisrtLink, secondLink}) => {
  return (    
      <nav className="navigation">
          <Link to={fisrtLink} className="navigation__link">{firstTitle}</Link>
          <Link to={secondLink} className="navigation__link">{secondTitle}</Link>
      </nav>
  )
}
      
export default Navigation;

