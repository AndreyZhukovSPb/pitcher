import React from "react";
import "./SectionLine.css";

interface SectionLineProps {
  isMain?: boolean;
}

const SectionLine: React.FC<SectionLineProps> = ({ isMain }) => {
  return (
    <div
      className={`sectionLine ${isMain ? "sectionLine_type_main" : ""}`}
    ></div>
  );
};

export default SectionLine;
