export default function Contact({ activeSection, scrollToSection }) {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="contact" className="section contact-section">
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

      <div className="contact-content">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-description">
          Feel free to reach out if you'd like to collaborate or just say hello!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong>
            <a href="mailto:tisha@example.com">tisha@example.com</a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/tisha" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/tisha
            </a>
          </div>
          <div className="contact-item">
            <strong>Location:</strong>
            <span>United States</span>
          </div>
        </div>
      </div>
    </section>
  );
}
