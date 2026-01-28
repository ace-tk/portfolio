export default function Navbar() {
    return (
      <nav className="navbar">
        <h2 className="logo">TG</h2>
  
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
  
        <a className="cv-btn" href="#">Download CV</a>
      </nav>
    );
  }
  