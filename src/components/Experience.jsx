import React from "react";

const EXPERIENCES = [
  {
    title: "Software Engineer",
    company: "2021 - Current | Take Blip",
    tech: "",
    description: "@TODO",
  },
  {
    title: "Backend Developer Pl",
    company: "2020 - 2021 | Positivo Soluções Didáticas",
    tech: " With microservices architecture i used a variety of technologies: .Net Core, xUnit, SQL Server, Dapper, Entity Framework, ElasticAPM, Azure Queue Storage; Node.js, MongoDB;",
    description:
      "The initial proposal was to recreate the old educational plataform, in the middle of the project we had another coordinate to follow, but i could learn about Domain Driven Design, Real time communication, Tests, Micro-services and how to deal with large volumes of data. Besides of the tech, i learned how to deal with squads integration helping other developers to achive the main goals of our leaders. \n My internalization at Positivo came from a well done job, i started on the 'firefighters' solving bugs and refactoring old code, after some changes we brought the microservices architecture to the company. Working on virtual room squad we made from scratch a solution to schedule and provide virtual rooms to teacher and students, with our worldwide solution we receive a large volume of requests, with these requirements any code i write need to be performatic and safe.",
  },
  {
    title: "Full Stack Developer Pl.",
    company: "2019 - 2020 | Self Tecnologia",
    tech: "",
    description:
      ".NET developer working with electronic totem of payments and status visualization, write in C# using Windows Presentation Foundation (WPF) & Windows Forms, for persistence MongoDB & MySQL, also e-commerce maintenance with vanilla Javascript, JQuery, CSS, PHP (Laravel) and Vue.js. Both projects with SCRUM and Jira.",
  },
  {
    title: "Fullstack developer Jr.",
    company: "2019 - 2019 | TARS Tecnologia",
    tech: "Technologies: Backend: .NET Framework 4.x, .NET Core, Entity Framework, PostgreSQL, PL-SQL, AWS EC2, AWS RDS, AWS Lambda, AWS S3 e SignalR. Frontend: Javascript, Knockout.Js, JQuery e Bootstrap.",
    description:
      "TARS emerged from the good work of Solintel development team, i was invited to start with the leaders this new project. Continuing the ERP development i could learn and reproduce business rules of the company, since sales to contability module. I also participate of development of the UPA's project together with Londrina municipal government where we gave quality of life for who needed medical care.",
  },
  {
    title: "Fullstack developer Jr.",
    company: "2018 - 2019 | Solintel",
    tech: "Technologies: Backend: .NET Framework 4.x, .NET Core, Entity Framework, PostgreSQL, PL-SQL, AWS EC2, AWS RDS, AWS Lambda, AWS S3 e SignalR. Frontend: Javascript, Knockout.Js, JQuery e Bootstrap.",
    description:
      "Working on Solintel i started helping on Walled Garden system, where internet providers can use to protect against threats that impair the functioning, availability and performance of your network. I also participated in the development of the Internal System, and ERP that solves all the needs of the company from business rules to control of invoices, at the moment i was able to learn how companies work and how using code i can help in the process.",
  },
  {
    title: "Frontend Developer Jr.",
    company: "2018 - 2018 | B.Play Commerce",
    tech: "Technologies: Node.js, Express.js, React, Bootstrap, Javascript, JQuery",
    description:
      "The company focus was institutional websites, the client could be person or a company. Being the only developer i participated in all stages of creating the website, from the briefing to the deployment. Passionate about UX I was also able to help the design team in decisions that would bring better usability to anyone who would use the product. All institutional sites were created in WordPress with a unique theme created entirely by me. I was also able to participate in maintenance and creation of VTEX stores and Loja Integrada.",
  },
];

const Experience = () => {
  return (
    <div className="experience__container bd-grid">
      {EXPERIENCES.map((exp, i) => (
        <div className="experience__content" key={i}>
          <div className="experience__time">
            <span className="experience__rounder"></span>
            <span className="experience__line"></span>
          </div>

          <div className="experience__data bd-grid">
            <h3 className="experience__title">{exp.title}</h3>
            <span className="experience__company">{exp.company}</span>
            <p className="experience__description">{exp.description}</p>
            <p className="experience__description">{exp.tech}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
