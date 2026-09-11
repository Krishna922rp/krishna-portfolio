import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "Insurance · Automation",
    title: "Insurance Policy Checking Automation",
    description:
      "Full-stack insurance automation platform for extracting, comparing, and validating policy documents through IDP and Appian workflows.",
    role: "Developer · Team of 8",
    period: "Dec 2024 — Apr 2026",
    impact: "~2.5 min per document",
    technologies: [
      "Appian",
      "React.js",
      "FastAPI",
      "Sensible IDP",
      "MariaDB",
    ],
  },
  {
    number: "02",
    category: "AI · Enterprise Software",
    title: "AI-Powered MS Teams Assistant",
    description:
      "Enterprise chatbot solution built for Microsoft Teams with NLP, intent recognition, adaptive cards, and automated support workflows.",
    role: "Developer",
    period: "Mar 2024 — Nov 2024",
    impact: "Self-service automation",
    technologies: [
      "Node.js",
      "Express.js",
      "OpenAI GPT",
      "Azure CLU",
      "Cosmos DB",
    ],
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <span className="section-kicker">Selected work</span>

            <h2>
              Systems built for
              <span>real-world problems.</span>
            </h2>
          </div>

          <p>
            A selection of products and automation systems built across
            insurance, AI, enterprise workflows, and full-stack development.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-card-number">{project.number}</span>

                <span className="project-card-category">
                  {project.category}
                </span>

                <span className="project-card-arrow">↗</span>
              </div>

              <div className="project-card-content">
                <div className="project-card-main">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-card-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-meta">
                  <div>
                    <span>Role</span>
                    <strong>{project.role}</strong>
                  </div>

                  <div>
                    <span>Timeline</span>
                    <strong>{project.period}</strong>
                  </div>

                  <div>
                    <span>Outcome</span>
                    <strong>{project.impact}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;