import React from 'react';
import './About.css'
import icon_coffee from '../../images/icon_coffee.png';
import icon_ninja from '../../images/icon_ninja.png';
import icon_trust from '../../images/icon_trust.png';
import { useMediaQuery } from 'react-responsive';
// import { aboutTexts } from '../../utils/constants'

interface AboutProps {
  [key: string]: any
}

const About: React.FC<AboutProps> = ({ aboutTexts }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 589px)` });

  return (
    <section className="about-box">
      <div className="about">
        <div className="about__box">
          <div className="about__container">
            <img src={icon_coffee} alt="иконка кофе" className="about__title" />
            <div className="about__contextContainer">
              <p className="about__context">
                {!isMobile? aboutTexts.p_1_1_desctop : aboutTexts.p_1_1_mobile}
              </p>
              <p className="about__context">
                {!isMobile? aboutTexts.p_1_2_desctop : aboutTexts.p_1_2_mobile}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_1_3_desctop}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_1_4_desctop}
              </p>
            </div>
          </div>
          <div className="about__container">
            <img
              src={icon_ninja}
              alt="иконка ниндзя"
              className="about__title"
            />
            <div className="about__contextContainer">
              <p className="about__context">
                {!isMobile? aboutTexts.p_2_1_desctop : aboutTexts.p_2_1_mobile}
              </p>
              <p className="about__context">
                {!isMobile? aboutTexts.p_2_2_desctop : aboutTexts.p_2_2_mobile}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_2_3_desctop}
              </p>
              <p className="about__context about__context_type_mobile" >
                {aboutTexts.p_2_4_desctop}
              </p>
            </div>
          </div>
          <div className="about__container">
            <img
              src={icon_trust}
              alt="иконка доверие"
              className="about__title"
            />
            <div className="about__contextContainer">
              <p className="about__context">
                {!isMobile? aboutTexts.p_3_1_desctop : aboutTexts.p_3_1_mobile}
              </p>
              <p className="about__context">
                {!isMobile? aboutTexts.p_3_2_desctop : aboutTexts.p_3_2_mobile}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_3_3_desctop}
              </p>
              <p className="about__context about__context_type_mobile">
                {aboutTexts.p_3_4_desctop}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;