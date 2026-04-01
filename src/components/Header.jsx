export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-wrapper">
          <div className="logo-icon">W</div>
          <span className="logo-text">WALL OF PORTFOLIOS</span>
        </div>
        <nav className="header-nav">
          <a href="#portfolio">Portfolios</a>
          <a href="#case-studies">Case Studies</a>
        </nav>
      </div>
      <div className="header-right">
        <button className="submit-btn">Submit Portfolio</button>
        <button className="login-btn">Log in/Signup</button>
      </div>
    </header>
  );
}


