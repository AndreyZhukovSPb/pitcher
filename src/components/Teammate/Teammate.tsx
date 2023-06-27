import React from "react";
import "./Teammate.css";

interface TeammateProps {
  id: number,
  image: string,
  name: string,
  role: string,
  about: string,
  begining?: string
}

const Teammate: React.FC<TeammateProps> = ({id, image, name, role, about, begining}) => {
  return (
    <div className="teammate">
      <img src={image} alt="фото сотрудника" className="teammate__image" />
      <p className="teammate__title">{name}</p>
      <p className="teammate__subTitle">{role}</p>
      <p className={`teammate__subTitle ${role === "сооснователь" ? 'teammate__subTitle_invisible' : ''} `}>в проекте с {begining} года</p>
      <p className="teammate__about">{about}</p>
    </div>
  )
}

export default Teammate