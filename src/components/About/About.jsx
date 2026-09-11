import "./About.css";

const highlights = [
  {
    value: "2+",
    label: "Years of experience",
  },
  {
    value: "2.5",
    label: "Minutes per document",
  },
  {
    value: "8",
    label: "Team members",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-top">
        <div>
          <span className="section-eyebrow">ABOUT ME</span>

          <h2>
            Engineering with
            <span>purpose and curiosity.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p>
          I am a Jr Software Engineer with 2+ years of experience building web 
          
          applications and automation solutions. Currently working as a Jr Software Engineer,
           developing AI-powered document data extraction systems and integrating them with Appian workflow 
           applications to streamline business processes. Skilled in HTML, CSS, JavaScript, Bootstrap, 
           React.js, Node.js, Python, and SQL. Experienced in frontend development, automation workflows, 
          and full-stack application development, focused on building scalable and efficient solutions
          </p>

          <p>
     React.js, Node.js, Python, and SQL. Experienced in frontend development, automation workflows, 
          and full-stack application development, focused on building scalable and efficient solutions.
          </p>
        </div>
      </div>

      <div className="about-bottom">
        <div className="about-quote">
          <span className="quote-mark">“</span>

          <p>
            Turning complex workflows into simple, useful experiences.
          </p>

          <span className="quote-caption">
            SOFTWARE ENGINEER / BUILDER
          </span>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <div className="about-highlight" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;