import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive, accessible, and interactive user interfaces.",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Developing APIs, business logic, and scalable backend services.",
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs"],
  },
  {
    number: "03",
    title: "Appian",
    description: "Designing workflow-driven enterprise applications and automations.",
    skills: ["SAIL Interfaces", "Process Models", "Record Types", "Connected Systems", "Web APIs"],
  },
  {
    number: "04",
    title: "AI & Automation",
    description: "Extracting, validating, and processing business documents with AI.",
    skills: ["Sensible IDP", "JSON Logic", "LLM Prompts", "Document Extraction", "Validation Rules"],
  },
  {
    number: "05",
    title: "Databases",
    description: "Working with structured and document-based data storage systems.",
    skills: ["MariaDB", "MongoDB", "SQLite", "Cosmos DB", "SQL"],
  },
  {
    number: "06",
    title: "Tools & Workflow",
    description: "Using modern tools to collaborate, build, and ship software.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Agile", "Debugging"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <div>
          <span className="section-eyebrow">TECHNICAL TOOLKIT</span>
          <h2>
            Skills that turn
            <span> ideas into systems.</span>
          </h2>
        </div>

        <p>
          A practical mix of frontend development, backend engineering,
          Appian workflows, and AI-powered document automation.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <span className="skill-number">{group.number}</span>
              <span className="skill-arrow">↗</span>
            </div>

            <h3>{group.title}</h3>
            <p>{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;