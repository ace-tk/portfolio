export default function Resume() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      school: "Newton School of Technology (ADYPU), Pune",
      year: "2023 – 2027",
      desc: "Studying core CS fundamentals, web development, data structures, and software engineering.",
    },
  ];



  const certifications = [
    {
      title: "Full-Stack Web Development",
      issuer: "Newton School of Technology",
      year: "2024",
    },
    {
      title: "React & React Native",
      issuer: "Udemy",
      year: "2023",
    },
  ];

  return (
    <section id="resume" className="section resume-section">
      <div className="resume-content">
        {/* Header */}
        <p className="resume-eyebrow">My Background</p>
        <h2 className="resume-title">
          My <span className="highlight">Resume</span>
        </h2>
        <p className="resume-desc">
          A snapshot of my education, skills, and certifications.
        </p>

        {/* Download Button */}
        <a href="#" className="resume-download-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
          </svg>
          Download PDF Resume
        </a>

        {/* Two-Column Grid */}
        <div className="resume-grid">

          {/* Education */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <span className="resume-block-dot" />
              Education
            </h3>
            {education.map((item, i) => (
              <div className="resume-card" key={i}>
                <span className="resume-card-year">{item.year}</span>
                <h4 className="resume-card-heading">{item.degree}</h4>
                <p className="resume-card-sub">{item.school}</p>
                <p className="resume-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <span className="resume-block-dot" />
              Certifications
            </h3>
            {certifications.map((item, i) => (
              <div className="resume-card" key={i}>
                <span className="resume-card-year">{item.year}</span>
                <h4 className="resume-card-heading">{item.title}</h4>
                <p className="resume-card-sub">{item.issuer}</p>
              </div>
            ))}
          </div>

        </div>


      </div>
    </section>
  );
}
