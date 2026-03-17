export default function Resume() {

  return (
    <div className="resume-content" id="resume">
      {/* Header */}
        <p className="resume-eyebrow">My Background</p>
        <h2 className="resume-title">
          My <span className="highlight">Resume</span>
        </h2>
        <p className="resume-desc">
          A snapshot of my professional background and skills.
        </p>

        {/* Download Button */}
        <a href="#" className="resume-download-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
          </svg>
          Download PDF Resume
        </a>

        <div className="resume-grid">
          {/* Professional experience or other content can be added here */}
        </div>


    </div>
  );
}
