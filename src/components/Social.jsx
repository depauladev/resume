import React from "react";

const Social = ({ icon, linkTo, title }) => {
  return (
    <a href={linkTo} rel="noreferrer" target="_blank" className="social___link">
      <i className={"bx social___icon " + icon}></i>
      {title}
    </a>
  );
};

export default Social;
