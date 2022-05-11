import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="skills__content bd-grid">
      <ul className="skills__data">
        <Skill name="C#" />
        <Skill name=".Net" />
        <Skill name="Javascript" />
      </ul>
      <ul className="skills__data">
        <Skill name="React" />
        <Skill name="Angular" />
        <Skill name="Vue" />
      </ul>
    </div>
  );
};

export default Skills;
