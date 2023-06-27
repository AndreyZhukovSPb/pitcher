import React from "react";
import "./MobileMenu.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface mobileMenuProps {
  isMobileMenuVisible: boolean;
  onCloseClick: () => void;
  isMain?: boolean;
  isPark?: boolean;
  isMayak?: boolean;
  isShop?: boolean;
  isGuide?: boolean;
  isContacts?: boolean
}

const MobileMenu: React.FC<mobileMenuProps> = ({
  isMobileMenuVisible,
  onCloseClick,
  isMain,
  isMayak,
  isPark,
  isShop,
  isGuide,
  isContacts
}) => {
  const overlayRef = React.useRef<HTMLDivElement>(null);

  function handleCheckIsOverlay(e: any) {
    if (!overlayRef.current || e.target.contains(overlayRef.current)) {
      onCloseClick();
    }
  }

  return (
    <div
      className={`menu ${isMobileMenuVisible ? "menu_active" : ""}`}
      ref={overlayRef}
      onClick={handleCheckIsOverlay}
    >
      <div className="menu__container">
        <button
          onClick={onCloseClick}
          className={`menu__closeButton ${
            isMobileMenuVisible ? "menu__closeButton_active" : ""
          }`}
        ></button>
        <div className="menu__navContainer">
          <Link
            to="/"
            className={`menu__navigation ${
              isMain ? "menu__navigation_active" : ""
            } }`}
            onClick={onCloseClick}
          >
            Главная
          </Link>
          <Link
            to="/"
            className={`menu__navigation ${
              isShop ? "menu__navigation_active" : ""
            } }`}
            onClick={onCloseClick}
          >
            Онлайн магазин
          </Link>
          <Link
            to="/"
            className={`menu__navigation ${
              isGuide ? "menu__navigation_active" : ""
            } }`}
            onClick={onCloseClick}
          >
            Гид по завариванию
          </Link>
          <Link
            to="/park"
            className={`menu__navigation ${
              isPark ? "menu__navigation_active" : ""
            } }`}
            onClick={onCloseClick}
          >
            Парк Победы
          </Link>
          <Link
            to="/mayak"
            className={`menu__navigation ${
              isMayak ? "menu__navigation_active" : ""
            } }`}
            onClick={onCloseClick}
          >
            Маяковская
          </Link>
          <Link
            to="/contacts"
            className={`menu__navigation ${
              isContacts ? "menu__navigation_active" : ""
            } }`}
            onClick={onCloseClick}
          >
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

/* 
<Link to='/park' className={`navigation__link ${isPark ? 'navigation__link_active' : ''} ${isMain ? 'navigation__link_type_main' : ''}`}>{firstTitle}</Link>
*/
