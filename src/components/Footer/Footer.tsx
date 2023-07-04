import React from "react";
import "./Footer.css";
import phoneIcon from "../../images/phone_new.png";
import emailIcon from "../../images/email.png";
import instaIcon from "../../images/insta.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__contacts">
          <a className="footer__contacts" href="/contacts">
            Контакты
          </a>
          <li className="footer__contactbox">
            <img className="footer__icon" src={phoneIcon} alt="icon phone" />
            <p className="footer__content footer__content_type_contacts">
              +7-931-339-30-43
            </p>
          </li>
          <li className="footer__contactbox">
            <img className="footer__icon" src={emailIcon} alt="icon email" />
            <p className="footer__content footer__content_type_contacts">
              pitcherbar@gmail.com
            </p>
          </li>
          <li className="footer__contactbox">
            <img className="footer__icon" src={instaIcon} alt="icon email" />
            <p className="footer__content footer__content_type_contacts">
              pitcherbar
            </p>
          </li>
        </ul>
        <div className="footer__coffeshops">
          <h3 className="footer__coffeshopsTitle">Наши кофейни</h3>
          <div className="footer__coffeshopsBox">
            <div className="footer__coffeshop">
              <h4 className="footer__content footer__content_type_adres">
                м Парк победы
              </h4>
              <h4 className="footer__content footer__content_type_adres">
                Бассейная 12
              </h4>
              <p className="footer__content footer__content_type_adres">
                Пн-Пт: 8:00-22:00
              </p>
              <p className="footer__content footer__content_type_adres">
                Сб-Вс: 9:00-22:00
              </p>
            </div>
            <div className="footer__coffeshop">
              <h4 className="footer__content footer__content_type_adres">
                м Маяковская
              </h4>
              <h4 className="footer__content footer__content_type_adres">
                Марата 2
              </h4>
              <p className="footer__content footer__content_type_adres">
                Пн-Пт: 9:00-22:00
              </p>
              <p className="footer__content footer__content_type_adres">
                Сб-Вс: 9:00-22:00
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__copyright">2014 - 2023 Picther loves you</p>
    </footer>
  );
};

export default Footer;
