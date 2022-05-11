import React from "react";
import Language from "./Language";

const Languages = () => {
  return (
    <div className="languages__container">
      <ul className="languages__content bd-grid">
        <Language name="Portuguese" />
        <Language name="English" />
      </ul>
    </div>
  );
};

export default Languages;
