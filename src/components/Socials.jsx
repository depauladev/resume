import React from "react";
import Social from "./Social";

const Socials = () => {
  return (
    <div className="social___container bd-grid">
      <Social
        icon="bxl-linkedin-square"
        linkTo="https://www.linkedin.com/in/luizhpo"
        title="@luizhpo"
      />
      <Social
        icon="bxl-github"
        linkTo="https://www.github.com/depauladev"
        title="@depauladev"
      />
    </div>
  );
};

export default Socials;
