import React from "react";

const Language = ({ name }) => {
  return (
    <li className="languages__name">
      <span className="languages__circle"></span> {name}
    </li>
  );
};

export default Language;
