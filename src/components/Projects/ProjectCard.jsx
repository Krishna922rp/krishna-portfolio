import "./ProjectCard.css";

function ProjectCard({
  number,
  category,
  title,
  description,
  result,
  technologies,
}) {
  return (
    <article className="project-card">
      <div className="project-number">{number}</div>

      <div className="project-main">
        <p className="project-category">{category}</p>

        <h3>{title}</h3>

        <p className="project-description">{description}</p>

        <div className="project-result">
          <span>RESULT</span>
          <p>{result}</p>
        </div>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="project-arrow">↗</div>
    </article>
  );
}

export default ProjectCard;