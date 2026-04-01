export default function Home({ activeSection, scrollToSection }) {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="portfolio" className="section home-section">
      <div className="section-header">
        <nav className="section-nav">
          <a
            href="#portfolio"
            className={`section-nav-link ${activeSection === "portfolio" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "portfolio")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`section-nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "about")}
          >
            About
          </a>
          <a
            href="#contact"
            className={`section-nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>

          <a
            href="#resume"
            className={`section-nav-link ${activeSection === "resume" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "resume")}
          >
            Resume
          </a>
        </nav>
      </div>

      <div className="home-content">
        <div className="home-text">
          <p className="greeting">Hi, I'm Tisha</p>
          <h1 className="hero-title">
            Web & Mobile App <span className="highlight">Developer</span>
          </h1>
          <p className="hero-description">

          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="primary-btn"
              onClick={(e) => handleNavClick(e, "projects")}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="secondary-btn"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact Me
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}

