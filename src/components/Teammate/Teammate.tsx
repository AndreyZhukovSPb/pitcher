import React from "react";
import "./Teammate.css";
import { useMediaQuery } from "react-responsive";
import { MyTypeTeam } from "../SharedTypes/SharedTypes";

const Teammate: React.FC<MyTypeTeam> = ({
  image,
  name,
  role,
  about,
  begining,
  about_mobile,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 599px)` });

  return (
    <div className="teammate">
      <img src={image} alt="фото сотрудника" className="teammate__image" />
      <p className="teammate__title">{name}</p>
      <p className="teammate__subTitle">{role}</p>
      <p
        className={`teammate__subTitle ${
          role === "сооснователь" ? "teammate__subTitle_invisible" : ""
        } `}
      >
        в проекте с {begining} {isMobile ? "г" : "года"}
      </p>
      <p className="teammate__about">{!isMobile ? about : about_mobile}</p>
    </div>
  );
};

export default Teammate;
