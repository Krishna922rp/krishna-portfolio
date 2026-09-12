import "./Contact.css";

const EMAIL = "ykrishnanm922@gmail.com";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="section-label">CONTACT</span>

          <h2>
            Let’s build something
            <span> meaningful.</span>
          </h2>

          <p>
            Have a project, opportunity, or idea in mind? Feel free to reach
            out. I would love to connect with you.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">✉</div>

          <div className="contact-card-content">
            <span>Email me directly</span>

            <a href={`mailto:${EMAIL}`} className="contact-email">
              {EMAIL}
            </a>
          </div>

          <a href={`mailto:${EMAIL}`} className="contact-arrow">
            ↗
          </a>
        </div>

        <div className="contact-actions">
          <a
            href={`mailto:${EMAIL}?subject=Project%20Opportunity`}
            className="contact-primary-button"
          >
            Send an Email
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-secondary-button"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;