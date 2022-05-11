import React from "react";

const Interest = ({ icon, name }) => {
  return (
    <div className="interests__content">
      <i className={"bx interests__icon " + icon}></i>
      <span className="interests__name">{name}</span>
    </div>
  );
};

export default Interest;
