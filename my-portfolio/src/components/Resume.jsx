export default function Resume({ activeSection, scrollToSection }) {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="resume" className="section resume-section">
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

      <div className="resume-content">
        <h2 className="section-title">Resume</h2>
        <div className="resume-download">
          <a href="#" className="download-btn">Download PDF Resume</a>
        </div>
        <div className="resume-sections">
          <div className="resume-section-item">
            <h3>Experience</h3>
            <div className="resume-item">
              <h4>Product Designer</h4>
              <p className="resume-company">Company Name • 2021 - Present</p>
              <p>Leading design initiatives for innovative digital products.</p>
            </div>
            <div className="resume-item">
              <h4>UX Designer</h4>
              <p className="resume-company">Previous Company • 2020 - 2021</p>
              <p>Designed user experiences for web and mobile applications.</p>
            </div>
          </div>
          <div className="resume-section-item">
            <h3>Education</h3>
            <div className="resume-item">
              <h4>Bachelor's Degree</h4>
              <p className="resume-company">University Name • 2016 - 2020</p>
              <p>Studied Computer Science and Design.</p>
            </div>
          </div>
          <div className="resume-section-item">
            <h3>Skills</h3>
            <div className="skills-list">
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Adobe XD</span>
              <span className="skill-tag">Sketch</span>
              <span className="skill-tag">Prototyping</span>
              <span className="skill-tag">User Research</span>
              <span className="skill-tag">UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

