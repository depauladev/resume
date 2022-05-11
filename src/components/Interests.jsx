import React from "react";
import Interest from "./Interest";

const Interests = () => {
  return (
    <div className="interests__container bd-grid">
      <Interest name="Read" icon="bx-book" />
      <Interest name="Cycling" icon="bx-cycling" />
      <Interest name="Music" icon="bx-headphone" />
      <Interest name="Games" icon="bx-joystick" />
      <Interest name="Exercice" icon="bx-dumbbell" />
      <Interest name="Animals" icon="bxs-dog" />
      <Interest name="Beer" icon="bx-beer" />
      <Interest name="Chess" icon="bxs-chess" />
    </div>
  );
};

export default Interests;
