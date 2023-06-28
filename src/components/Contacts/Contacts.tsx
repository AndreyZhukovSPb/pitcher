import React from "react";
import "./Contacts.css";
import StoreData from "../StoreData/StoreData";
import { dataMayak, dataPark } from "../../utils/constants";
import { useMediaQuery } from "react-responsive";
import phoneIcon from "../../images/phone_new.png";
import emailIcon from "../../images/email.png";
import instaIcon from "../../images/insta.png";

interface ContactsProps {
  
}

const Contacts: React.FC<ContactsProps> = (isContacts) => {
  const isTablet = useMediaQuery({
    query: `(max-width: 899px) and (min-width: 768px)`,
  });
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const isSmallMobile = useMediaQuery({ query: `(max-width: 599px)` });

  return (
    <section className="contacts">
      <div className="contacts__container">
        <StoreData data={dataPark} isPark={true} />
        <StoreData data={dataMayak} isMayak={true} />
      </div>

      <ul className="contacts__data">
        <li className="contacts__contactbox">
          <img className="contacts__icon" src={phoneIcon} alt="icon phone" />
          <p className="contacts__content">
            +7-931-339-30-43
          </p>
        </li>
        <li className="contacts__contactbox">
          <img className="contacts__icon" src={emailIcon} alt="icon email" />
          <p className="contacts__content">
            pitcherbar@gmail.com
          </p>
        </li>
        <li className="contacts__contactbox">
          <img className="contacts__icon" src={instaIcon} alt="icon email" />
          <p className="contacts__content">
            pitcherbar
          </p>
        </li>
      </ul>
      <p className="contacts__message">2014 - 2023 Picther loves you</p>
    </section>
  );
};

export default Contacts;