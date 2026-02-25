import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Projects from "./components/Projects";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("portfolio");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["portfolio", "about", "projects", "contact", "extras", "resume"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Home activeSection={activeSection} scrollToSection={scrollToSection} />
      <About activeSection={activeSection} scrollToSection={scrollToSection} />
      <Projects />
      <Contact activeSection={activeSection} scrollToSection={scrollToSection} />
      <Resume activeSection={activeSection} scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
