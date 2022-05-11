import "./App.css";
import avatar from "./assets/avatar.jpg";

// const themeButton = document.getElementById("theme-button");
// const darkTheme = "dark-theme";
// const iconTheme = "bx-sun";

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// // We validate if the user previously chose a topic
// // if (selectedTheme) {
// //   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
// //   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
// //     darkTheme
// //   );
// //   themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
// //     iconTheme
// //   );
// // }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener("click", () => {
//   // Add or remove the dark / icon theme
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // We save the theme and the current icon that the user chose
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// });

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll(".nav__link");

// function linkAction() {
//   const navMenu = document.getElementById("nav-menu");
//   // When we click on each nav__link, we remove the show-menu class
//   navMenu.classList.remove("show-menu");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));

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

function App() {
  return (
    <div className="App">
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="/" className="nav__logo">
            Luiz de Paula
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="bx bx-home nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#profile" className="nav__link">
                  <i className="bx bx-user nav__icon"></i>Profile
                </a>
              </li>
              <li className="nav__item">
                <a href="#education" className="nav__link">
                  <i className="bx bx-book nav__icon"></i>Education
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="bx bx-receipt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#experience" className="nav__link">
                  <i className="bx bx-briefcase-alt nav__icon"></i>Experience
                </a>
              </li>
              <li className="nav__item">
                <a href="#certificates" className="nav__link">
                  <i className="bx bx-award nav__icon"></i>Certificates
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toogle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>

      <main className="l-main bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <section className="home" id="home">
              <div className="home__container section bd-grid">
                <div className="home__data bd-grid">
                  <img src={avatar} alt="me" className="home__img" />

                  <h1 className="home__title">
                    Luiz <b>de Paula</b>
                  </h1>
                  <h3 className="home__profession">Software Engineer</h3>
                  <div>
                    <a href="www.google.com" className="home__button_movil">
                      Download CV
                    </a>
                  </div>
                </div>

                <div className="home__address bd-grid">
                  <span className="home__information">
                    <i className="bx bx-map home__icon"></i> Londrina - PR
                  </span>
                  <span className="home__information">
                    <i className="bx bx-envelope home__icon"></i>
                    depauladev@gmail.com
                  </span>
                  <span className="home__information">
                    <i className="bx bx-phone home__icon"></i> +55 (43)
                    999999999
                  </span>
                </div>
              </div>

              <i
                className="bx bx-moon change-theme"
                title="Theme"
                id="theme-button"
              ></i>
            </section>

            <section className="social section">
              <h2 className="section-title">SOCIAL</h2>

              <div className="social___container bd-grid">
                <a
                  href="linkedin.com/"
                  target="_blank"
                  className="social___link"
                >
                  <i className="bx bxl-linkedin-square social___icon"></i>
                  @luihpo
                </a>
                <a
                  href="github.com/depauladev"
                  target="_blank"
                  className="social___link"
                >
                  <i className="bx bxl-github social___icon"></i> @luihpo
                </a>
              </div>
            </section>

            <section className="profile section" id="profile">
              <h2 className="section-title">Profile</h2>

              <p className="profile__description">
                I started my career in programming as a frontend developer,
                working mainly with Javascript, then I became a fullstack
                developer including .NET and a variability of databases in my
                stack. All my career I have worked in agile multidisciplinary
                teams looking for solid deliveries and up
              </p>
            </section>

            <section className="education section" id="education">
              <h2 className="section-title">Education</h2>

              <div className="education__container bd-grid">
                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                  </div>
                  <div className="eduction__data bd-grid">
                    <h3 className="education__title">Software Engineering</h3>
                    <span className="education__studies">
                      Faculdade da Industria - SENAI
                    </span>
                    <span className="education__year">2021 - 2025</span>
                  </div>
                </div>
                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                  </div>
                  <div className="eduction__data bd-grid">
                    <h3 className="education__title">
                      Analise e Desenvolvimento de Sistemas
                    </h3>
                    <span className="education__studies">PUC - PR</span>
                    <span className="education__year">2020 - N/A</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="skills section" id="skills">
              <h3 className="section-title">Skills</h3>

              <div className="skills__content bd-grid">
                <ul className="skills__data">
                  <li className="skills__name">
                    <span className="skills__circle"></span> HTML
                  </li>
                  <li className="skills__name">
                    <span className="skills__circle"></span> CSS
                  </li>
                  <li className="skills__name">
                    <span className="skills__circle"></span> Javascript
                  </li>
                </ul>
                <ul className="skills__data">
                  <li className="skills__name">
                    <span className="skills__circle"></span> React
                  </li>
                  <li className="skills__name">
                    <span className="skills__circle"></span> Angular
                  </li>
                  <li className="skills__name">
                    <span className="skills__circle"></span> Vue
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="resume__right">
            <section className="experience section" id="experience">
              <h2 className="section-title">Experience</h2>

              <div className="experience__container bd-grid">
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Software Engineer</h3>
                    <span className="experience__company">
                      2021 - Current | Take Blip
                    </span>
                    <p className="experience__description">
                      I started my career in programming as a frontend
                      developer, working mainly with Javascript, then I became a
                      fullstack developer including .NET and a variability of
                      databases in my stack.
                    </p>
                  </div>
                </div>

                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Developer</h3>
                    <span className="experience__company">
                      2020 - 2021 | Positivo Soluções Didaticas
                    </span>
                    <p className="experience__description">
                      I started my career in programming as a frontend
                      developer, working mainly with Javascript, then I became a
                      fullstack developer including .NET and a variability of
                      databases in my stack.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="certificate section"
              id="certificates"
            ></section>

            <section className="languages section">
              <h2 className="section-title">Languages</h2>

              <div className="languages__container">
                <ul className="languages__content bd-grid">
                  <li className="languages__name">
                    <span className="languages__circle"></span> Portuguese
                  </li>
                  <li className="languages__name">
                    <span className="languages__circle"></span> English
                  </li>
                </ul>
              </div>
            </section>

            <section className="interests section">
              <h2 className="section-title">Interests</h2>

              <div className="interests__container bd-grid">
                <div className="interests__content">
                  <i className="bx bx-headphone interests__icon"></i>
                  <span className="interests__name">Music</span>
                </div>
                <div className="interests__content">
                  <i className="bx bx-headphone interests__icon"></i>
                  <span className="interests__name">Music</span>
                </div>
                <div className="interests__content">
                  <i className="bx bx-headphone interests__icon"></i>
                  <span className="interests__name">Music</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
      </a>
    </div>
  );
}

export default App;
