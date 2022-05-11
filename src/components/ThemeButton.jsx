import React from "react";

const ThemeButton = () => {
  const [light, setLight] = React.useState(true);

  const handleLight = () => {
    document.body.classList.toggle("dark-theme");
    setLight(!light);
  };

  return (
    <i
      onClick={handleLight}
      className={"bx change-theme " + (light ? "bx-moon" : "bx-sun")}
    ></i>
  );
};

export default ThemeButton;
