import avatar from "./assets/avatar.jpg";
import resume from "./assets/luiz_de_paula_resume.pdf";
import ThemeButton from "./components/ThemeButton";
import ScrollTopArrow from "./components/ScrollTopArrow";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Educations from "./components/Educations";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="App">
      <header className="l-header" id="header">
        <Menu />
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
                    <a download href={resume} className="home__button_movil">
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
                  <a
                    className="home__information"
                    rel="noreferrer"
                    href="https://api.whatsapp.com/send?phone=5543984177306&text=Oi Luiz, vamos conversar?"
                    target="_blank"
                  >
                    <i className="bx bxl-whatsapp home__icon"></i>
                    Send hi!
                  </a>
                </div>
              </div>

              <ThemeButton />
            </section>

            <section className="social section">
              <h2 className="section-title">SOCIAL</h2>
              <Socials />
            </section>

            <section className="profile section" id="profile">
              <h2 className="section-title">Profile</h2>

              <p className="profile__description">
                I started my career as a frontend developer, working mainly with
                Javascript, then I became a fullstack developer including .NET
                and a variability of databases in my stack. <br />
                <br /> All my career I have worked in agile multidisciplinary
                teams looking for solid deliveries and up to expectations. I
                have proficiency building cloud-based microservices in the
                backend, mainly in Azure and AWS, also using messaging and
                containerization technologies.
              </p>
            </section>

            <section className="education section" id="education">
              <h2 className="section-title">Education</h2>
              <Educations />
            </section>

            <section className="skills section" id="skills">
              <h3 className="section-title">Skills</h3>
              <Skills />
            </section>
          </div>

          <div className="resume__right">
            <section className="experience section" id="experience">
              <h2 className="section-title">Experience</h2>
              <Experience />
            </section>

            <section className="languages section" id="languages">
              <h2 className="section-title">Languages</h2>
              <Languages />
            </section>

            <section className="interests section">
              <h2 className="section-title">Interests</h2>
              <Interests />
            </section>
          </div>
        </div>
      </main>

      <ScrollTopArrow />
    </div>
  );
}

export default App;
