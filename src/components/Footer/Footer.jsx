import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const email = "krishna.yadla922@gmail.com";

  const handleEmailClick = (event) => {
    event.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-glow footer-glow-left" />
      <div className="footer-glow footer-glow-right" />

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            KY<span>.</span>
          </div>

          <p className="footer-tagline">
            Designed and built with curiosity,
            <br />
            clean code, and a little caffeine.
          </p>
        </div>

        <div className="footer-center">
          <span className="footer-eyebrow">LET'S BUILD SOMETHING</span>

          <h2>
            Have an idea?
            <span>Let's make it real.</span>
          </h2>

          <a
            className="footer-email"
            href={`mailto:${email}`}
            onClick={handleEmailClick}
          >
            {email}
            <span>↗</span>
          </a>
        </div>

        <div className="footer-actions">
          <a
            className="footer-action-button footer-action-primary"
            href={`mailto:${email}`}
            onClick={handleEmailClick}
          >
            <span>Start a conversation</span>
            <span>↗</span>
          </a>

          <a
            className="footer-action-button"
            href="https://www.linkedin.com/in/krishna-yadla/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>

          <a
            className="footer-action-button"
            href="https://github.com/Krishna922rp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Krishna Yadla</span>

        <span className="footer-built">
          Made with <b>React</b> <i>×</i> curiosity
        </span>

        <button
          type="button"
          className="footer-top-button"
          onClick={scrollToTop}
        >
          Back to top
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;