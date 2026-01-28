export default function Extras({ activeSection, scrollToSection }) {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="extras" className="section extras-section">
      <div className="section-header">
        <div className="initials-logo">TS</div>
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
            href="#extras" 
            className={`section-nav-link ${activeSection === "extras" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "extras")}
          >
            Extras
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

      <div className="extras-content">
        <h2 className="section-title">Extras</h2>
        <p className="extras-description">
          Additional information, articles, blog posts, or any other content you'd like to share.
        </p>
        <div className="extras-grid">
          <div className="extra-item">
            <h3>Design Resources</h3>
            <p>Collection of design tools and resources I use in my work.</p>
          </div>
          <div className="extra-item">
            <h3>Articles</h3>
            <p>Thoughts and insights on design, technology, and product development.</p>
          </div>
          <div className="extra-item">
            <h3>Side Projects</h3>
            <p>Personal projects and experiments outside of my main work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

