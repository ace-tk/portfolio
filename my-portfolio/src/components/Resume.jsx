export default function Resume({ activeSection, scrollToSection }) {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="resume-content">
        <h2 className="section-title">Resume</h2>
        <div className="resume-download">
          <a href="#" className="download-btn">Download PDF Resume</a>
        </div>
        <div className="resume-sections">
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

