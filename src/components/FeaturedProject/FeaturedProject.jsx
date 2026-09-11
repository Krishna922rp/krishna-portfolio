import "./FeaturedProject.css";

const workflowSteps = [
  {
    number: "01",
    title: "Document upload",
    description: "Upload prior and renewal insurance documents.",
  },
  {
    number: "02",
    title: "AI extraction",
    description: "IDP extracts structured policy information.",
  },
  {
    number: "03",
    title: "Policy validation",
    description: "Rules compare coverages, limits, and conditions.",
  },
  {
    number: "04",
    title: "Appian workflow",
    description: "Validated results move through approval workflows.",
  },
];

const technologies = [
  "Appian",
  "React.js",
  "FastAPI",
  "Sensible IDP",
  "MariaDB",
  "REST APIs",
];

function FeaturedProject() {
  return (
    <section className="featured-project-section" id="featured-project">
      <div className="featured-project-container">
        <div className="section-heading featured-project-heading">
          <div>
            <span className="section-kicker">Featured case study</span>

            <h2>
              Insurance Policy Checking
              <span>Automation.</span>
            </h2>
          </div>

          <span className="featured-project-status">
            <span />
            Production system
          </span>
        </div>

        <div className="featured-project-card">
          <div className="featured-project-intro">
            <div className="featured-project-copy">
              <span className="project-number">01 / FEATURED PROJECT</span>

              <h3>From documents to validated policy insights.</h3>

              <p>
                An end-to-end insurance document automation platform that
                extracts, compares, and validates policy information before
                sending the results into Appian workflows.
              </p>

              <div className="featured-project-tags">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="featured-project-metrics">
              <div className="project-metric">
                <strong>~2.5 min</strong>
                <span>Processing time per document</span>
              </div>

              <div className="project-metric">
                <strong>8</strong>
                <span>Engineers on the team</span>
              </div>

              <div className="project-metric">
                <strong>5+</strong>
                <span>Insurance lines of business</span>
              </div>
            </div>
          </div>

          <div className="workflow-visual">
            <div className="workflow-visual-header">
              <div>
                <span className="workflow-label">SYSTEM WORKFLOW</span>
                <h4>Policy validation pipeline</h4>
              </div>

              <span className="workflow-live-badge">
                <span />
                Active flow
              </span>
            </div>

            <div className="workflow-grid">
              {workflowSteps.map((step, index) => (
                <div className="workflow-step" key={step.number}>
                  <div className="workflow-step-top">
                    <span className="workflow-step-number">
                      {step.number}
                    </span>

                    {index !== workflowSteps.length - 1 && (
                      <span className="workflow-connector">→</span>
                    )}
                  </div>

                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>

            <div className="workflow-result">
              <div className="workflow-result-icon">✓</div>

              <div>
                <strong>Validated policy result</strong>
                <span>
                  Extracted data is ready for review, comparison, and
                  downstream approval.
                </span>
              </div>

              <span className="workflow-result-status">Validated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;