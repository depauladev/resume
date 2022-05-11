import React from "react";

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

const menuItens = [
  {
    name: "Home",
    icon: "bx-home",
    linkTo: "#home",
  },
  {
    name: "Profile",
    icon: "bx-user",
    linkTo: "#profile",
  },
  {
    name: "Education",
    icon: "bx-book",
    linkTo: "#education",
  },
  {
    name: "Skills",
    icon: "bx-receipt",
    linkTo: "#skills",
  },
  {
    name: "Experience",
    icon: "bx-briefcase-alt",
    linkTo: "#experience",
  },
  {
    name: "Languages",
    icon: "bx-award",
    linkTo: "#languages",
  },
];

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="nav bd-container">
      <button
        className="nav__logo"
        onClick={() => {
          window.scrollTo({
            top: 0,
          });
        }}
      >
        Luiz de Paula
      </button>
      <div className={"nav__menu " + (open ? "show-menu" : "")}>
        <ul className="nav__list">
          {menuItens.map((item, index) => (
            <li className="nav__item" onClick={toggleMenu} key={index}>
              <a href={item.linkTo} className="nav__link">
                <i className={"bx nav__icon " + item.icon}></i>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div onClick={toggleMenu} className="nav__toogle">
        <i className="bx bx-grid-alt"></i>
      </div>
    </nav>
  );
};

export default Menu;
