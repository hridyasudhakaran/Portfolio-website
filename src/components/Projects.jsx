import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      title: "8-to-256 Decoder",
      duration: "June 2024 - Present",
      description:
        "Working on the design of an 8-to-256 address decoder using both analog and digital VLSI methodologies. In the analog path, designing and simulating transistor-level schematics in Cadence Virtuoso using TSMC 180nm technology, including layout, DRC/LVS, and delay optimization using Elmore modeling and buffer insertion.",
      technologies: ["Cadence Virtuoso", "TSMC 180nm", "Verilog", "VLSI Design"],
      status: "ongoing",
    },
    {
      title: "CICADA - Interactive Quiz Website",
      duration: "Dec 2024",
      description:
        "An interactive quiz website where users progress through different levels by answering questions correctly. Each correct answer unlocks the next level, creating an engaging and challenging experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      status: "completed",
    },
    {
      title: "Pattern Follower Toy",
      duration: "Feb 2024",
      description:
        "Designed and developed an autonomous toy that displays a sequence of lights and requires players to recall and input the correct order. Integrated a microprocessor to recognize and follow predefined patterns.",
      technologies: ["Embedded Systems", "Microprocessor", "Digital Electronics"],
      status: "completed",
    },
    {
      title: "Mini Audio Equalizer",
      duration: "Oct 2024",
      description:
        "Built an audio equalizer to modify audio signals by adjusting bass, treble and midrange frequencies based on personal preferences. Implemented analog filters to enhance sound quality.",
      technologies: ["Analog Filters", "Audio Processing", "Circuit Design"],
      status: "completed",
    },
    {
      title: "Logic Car Parking Counter",
      duration: "April 2024",
      description:
        "Developed a parking counter system where the count increases by 1 when a car enters and decreases by 1 when a car leaves. Integrated a 7-segment display for user-friendly visual feedback.",
      technologies: ["Digital Logic", "7-Segment Display", "Counter Circuits"],
      status: "completed",
    },
    {
      title: "Monostable Circuit",
      duration: "Dec 2023",
      description:
        "Designed and implemented a controlled stable state or pulse generator circuit using IC555. The circuit generates precise timing pulses for various applications.",
      technologies: ["IC555", "Analog Electronics", "Pulse Generation"],
      status: "completed",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header reveal">
          <h2>
            Featured <span className="highlight">Projects</span>
          </h2>
          <p>A showcase of my technical projects and innovations</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card stagger-item">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-duration">{project.duration}</div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <span className={`project-status ${project.status}`}>
                {project.status === "ongoing" ? "In Progress" : "Completed"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
