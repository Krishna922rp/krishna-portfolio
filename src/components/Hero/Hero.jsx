import { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.png";

const roles = [
  "SOFTWARE ENGINEER",
  "APPIAN DEVELOPER",
  "FULL STACK BUILDER",
  "AI AUTOMATION ENGINEER",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-background" />

      <div className="hero-topline">
        <span>KRISHNA YADLA</span>
        <span className="hero-topline-center">DIGITAL SYSTEMS / 2026</span>
        <span className="hero-topline-status">
          <i />
          AVAILABLE FOR OPPORTUNITIES
        </span>
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="hero-kicker-dot" />
            {roles[roleIndex]}
          </div>

          <h1 className="hero-title">
            Building digital
            <span>solutions that</span>
            <strong>create real impact.</strong>
          </h1>

          <p className="hero-description">
            I’m Krishna Yadla, an Appian Developer and Full Stack Engineer
            focused on turning complex problems into simple, scalable
            products.
          </p>

          <div className="hero-actions">
            <a className="hero-primary-button" href="#work">
              View my work
              <span>↗</span>
            </a>

            <a className="hero-secondary-button" href="#contact">
              Get in touch
              <span>↗</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>2.4+</strong>
              <span>Years experience</span>
            </div>

            <div className="hero-stat">
              <strong>4+</strong>
              <span>Projects delivered</span>
            </div>

            <div className="hero-stat">
              <strong>100%</strong>
              <span>Problem solving</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-code-widget">
            <span>&lt;/&gt;</span>
            <p>
              Build
              <br />
              Automate
              <br />
              Improve
            </p>
          </div>

          <div className="hero-image-frame">
            <div className="hero-image-glow" />
            <img src={heroImage} alt="Krishna Yadla" />
          </div>

          <div className="hero-impact-card">
            <div className="impact-card-heading">
              <span />
              <p>
                Turning ideas
                <br />
                into impact.
              </p>
            </div>

            <div className="impact-card-lines">
              <span>CLEAN CODE</span>
              <span>BETTER SYSTEMS</span>
              <span>BRIGHTER TOMORROW</span>
            </div>

            <div className="impact-bars">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="hero-tech-widget">
            <span className="hero-tech-label">TECH I WORK WITH</span>

            <div className="hero-tech-list">
              <span>React</span>
              <span>Node</span>
              <span>API</span>
              <span>AI</span>
              <span>DB</span>
            </div>
          </div>

          <div className="hero-visual-caption">
            <span className="hero-caption-line" />
            <span>CURRENTLY EXPLORING AI × LOW CODE × SCALABLE SYSTEMS</span>
          </div>
        </div>
      </div>

      <a className="hero-scroll-indicator" href="#work">
        <span className="scroll-mouse">
          <i />
        </span>
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}

export default Hero;