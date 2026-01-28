export default function About({ activeSection, scrollToSection }) {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="about" className="section about-section">
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

      <div className="about-content">
        <div className="about-text">
          <p>
            👋 Hi, I'm Tisha, designer with 3 + years of experience in building delightful digital products. 
            My mission is to turn complicated problems into interfaces so intuitive they blend into your day.
          </p>
          <p>
            I start with deep user empathy and metric driven insight, layer in the newest tech, and package 
            the whole journey as a clear story, so everyone sees the why behind every pixel and the impact 
            behind every launch.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="https://via.placeholder.com/500x400" 
            alt="About" 
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
}
