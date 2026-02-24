export default function Projects() {
  const featuredProjects = [
    {
      title: "Mess Management System",
      desc: "Web app for digital food ordering and subscriptions.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mood Tracker App",
      desc: "Tracks daily mood with local storage.",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Task Manager",
      desc: "Organize tasks with deadlines.",
      tech: ["React", "Express", "MongoDB"],
    },
  ];

  const ongoingProjects = [
    {
      title: "Portfolio Redesign",
      desc: "Revamping my personal portfolio with improved UX, animations, and responsive layouts.",
      tech: ["React", "CSS", "Framer Motion"],
    },
    {
      title: "Learning Hub (In Progress)",
      desc: "A mini platform to share coding notes, resources, and practice projects.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Open Slot – Your Next Idea",
      desc: "Placeholder for an upcoming project. I’ll update this soon with something exciting!",
      tech: ["TBD"],
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          Some of the <span>notable projects</span> I've worked on.
        </p>

        {/* Row 1: Headline / Featured Projects */}
        <div className="projects-row">
          <div className="projects-row-header">
            <h3 className="projects-row-title">Headline Projects</h3>
            <p className="projects-row-caption">
              Production-ready and completed work that represents what I love building.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image" />

                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="project-btn">View Project</button>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Ongoing Projects (Sample templates) */}
        <div className="projects-row projects-row-ongoing">
          <div className="projects-row-header">
            <h3 className="projects-row-title">Ongoing Projects</h3>
            <p className="projects-row-caption">
              Work in progress and space for new ideas. You can replace these cards with your real projects later.
            </p>
          </div>

          <div className="projects-grid">
            {ongoingProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image" />

                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="project-btn">View Project</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
