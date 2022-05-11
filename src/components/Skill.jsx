import React from "react";

const Skill = ({ name }) => {
  return (
    <li className="skills__name">
      <span className="skills__circle"></span> {name}
    </li>
  );
};

export default Skill;
