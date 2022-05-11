import React from "react";

const Education = ({ title, studies, year }) => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="eduction__data bd-grid">
        <h3 className="education__title">{title}</h3>
        <span className="education__studies">{studies}</span>
        <span className="education__year">{year}</span>
      </div>
    </div>
  );
};

export default Education;
