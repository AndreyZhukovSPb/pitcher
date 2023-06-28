import React from "react";
import "./Team.css";
import { useState, useEffect } from "react";
import { parkStaff, textTeam } from "../../utils/constants";
import Teammate from "../Teammate/Teammate";
import { MyTypeTeam } from "../SharedTypes/SharedTypes"

interface TeamProps {
  isMayak: boolean;
  isPark: boolean;
}

const Team: React.FC<TeamProps> = ({ isMayak, isPark }) => {

  const [currentTeam, setCurrentTeam] = React.useState<Array<MyTypeTeam>>([]);

  useEffect(() => {
    if (isMayak) {
      setCurrentTeam(parkStaff);
    } else if (isPark) {
      setCurrentTeam(parkStaff);
    }
  }, [isPark, isMayak]);

  return (
    <section className="team">
      <h2 className="team__title">Команда Pitcher</h2>
      <p className="team__subTitle">{textTeam.firstMessage}</p>
      <p className="team__subTitle">{textTeam.secondMEssage}</p>
      <p className="team__subTitle">{textTeam.thirdMEssage}</p>
      <div className="team__container">
        {currentTeam.map((item) => (
          <Teammate
            key={`${item.id} ${item.name}`}
            image={item.image}
            name={item.name}
            about={item.about}
            role={item.role}
            id={item.id}
            begining={item.begining}
            about_mobile={item.about_mobile}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;

/* 
interface MyTypeTeam {
    id: number;
    image: string;
    name: string;
    role: string;
    about: string;
    about_mobile: string;
    begining?: string
  }
*/
