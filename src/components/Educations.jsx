import React from "react";
import Education from "./Education";

const Educations = () => {
  return (
    <div className="education__container bd-grid">
      <Education
        title="Software Engineering"
        studies="Faculdade da Industria - SENAI"
        year="2021 - 2025"
      />
      <Education
        title="Software Analysis and Development"
        studies="PUC - PR"
        year="2020 - N/A"
      />
    </div>
  );
};

export default Educations;
