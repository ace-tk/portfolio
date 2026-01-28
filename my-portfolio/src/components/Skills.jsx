export default function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "React", "GitHub"];
  
    return (
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map(skill => (
            <div key={skill} className="skill-card">{skill}</div>
          ))}
        </div>
      </section>
    );
  }
  