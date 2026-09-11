import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="navbar-logo" href="#home" onClick={closeMenu}>
          KY<span>.</span>
        </a>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a className="navbar-availability" href="#contact">
          <span className="navbar-status-dot" />
          Available for work
        </a>

        <button
          className={`navbar-menu-button ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;