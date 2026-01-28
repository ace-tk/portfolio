export default function Sidebar({ activeSection, scrollToSection }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-picture-wrapper">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="profile-picture"
          />
        </div>
        
        <button className="open-to-work-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          Open to Work
        </button>

        <h1 className="sidebar-name">Tisha</h1>
        <p className="sidebar-handle">@tisha</p>

        <div className="sidebar-info">
          <div className="info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>United States</span>
          </div>
          <div className="info-item">
            <span>Product Designer</span>
          </div>
          <div className="info-item experience">
            <span>3 Years Experience Includes:</span>
            <div className="company-logos">
              <div className="company-logo">IU</div>
              <div className="company-logo">ProProfs</div>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`sidebar-nav-item ${activeSection === "portfolio" ? "active" : ""}`}
            onClick={() => scrollToSection("portfolio")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            Portfolio
          </button>
          <button 
            className={`sidebar-nav-item ${activeSection === "about" || activeSection === "contact" || activeSection === "extras" || activeSection === "resume" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Profile
          </button>
        </nav>

        <div className="bookmark-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          Bookmark
        </div>
      </div>
    </aside>
  );
}




