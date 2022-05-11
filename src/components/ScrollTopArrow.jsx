import React from "react";

const ScrollTopArrow = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="scrolltop"
      id="scroll-top"
    >
      <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
    </button>
  );
};

export default ScrollTopArrow;
