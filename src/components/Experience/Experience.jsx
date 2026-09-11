import "./Experience.css";

const experience = [
  {
    number: "01",
    company: "Sree Tammina Software Solutions Pvt. Ltd.",
    role: "Software Engineer",
    period: "Feb 2024 — Apr 2026",
    location: "Hyderabad, India",
    description:
      "Worked on enterprise software solutions involving Appian workflows, full-stack development, insurance policy automation, and AI-powered document processing.",
    responsibilities: [
      "Developed insurance policy checking workflows using Appian.",
      "Integrated FastAPI services through Appian Connected Systems.",
      "Worked with Sensible IDP for document extraction and validation.",
      "Built REST APIs and file conversion services.",
      "Collaborated with a team of 8 engineers on automation solutions.",
    ],
    technologies: ["Appian", "React.js", "FastAPI", "Sensible IDP", "MariaDB"],
  },
  {
    number: "02",
    company: "Special Graphics",
    role: "WordPress Developer Intern",
    period: "Nov 2022 — Apr 2023",
    location: "Remote",
    description:
      "Worked on responsive websites and content-driven web experiences using WordPress, HTML, CSS, and frontend development practices.",
    responsibilities: [
      "Created and updated responsive WordPress pages.",
      "Customized website layouts and reusable components.",
      "Improved website structure, styling, and user experience.",
      "Worked with HTML, CSS, Bootstrap, and WordPress tools.",
    ],
    technologies: ["WordPress", "HTML", "CSS", "Bootstrap"],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <div>
            <span className="section-kicker">Experience</span>

            <h2>
              Growing through
              <span>meaningful work.</span>
            </h2>
          </div>

          <p>
            My experience spans enterprise automation, full-stack development,
            insurance technology, and AI-powered document processing.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.number}>
              <div className="experience-index">
                <span>{item.number}</span>
                <div />
              </div>

              <div className="experience-main">
                <div className="experience-top">
                  <div>
                    <span className="experience-period">{item.period}</span>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                  </div>

                  <span className="experience-location">
                    {item.location}
                  </span>
                </div>

                <p className="experience-description">{item.description}</p>

                <ul className="experience-responsibilities">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>

                <div className="experience-technologies">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;