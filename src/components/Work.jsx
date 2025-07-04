import "./Work.css"

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "8-to-256 Decoder",
      description:
        "Working on the design of an 8-to-256 address decoder using both analog and digital VLSI methodologies with Cadence Virtuoso and TSMC 180nm technology.",
      image: "/images/decoder.png",
      technologies: ["Cadence Virtuoso", "TSMC 180nm", "Verilog", "VLSI Design"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "CICADA - Interactive Quiz Website",
      description:
        "An interactive quiz website where users progress through different levels by answering questions correctly. Each correct answer unlocks the next level.",
      image: "/images/cicada.png",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Pattern Follower Toy",
      description:
        "Designed and developed an autonomous toy that displays a sequence of lights and requires players to recall and input the correct order.",
      image: "/images/patern.png",
      technologies: ["Embedded Systems", "Microprocessor", "Digital Electronics"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Mini Audio Equalizer",
      description:
        "Built an audio equalizer to modify audio signals by adjusting bass, treble and midrange frequencies based on personal preferences.",
      image: "/images/equalizer.png",
      technologies: ["Analog Filters", "Audio Processing", "Circuit Design"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Logic Car Parking Counter",
      description:
        "Developed a parking counter system where the count increases by 1 when a car enters and decreases by 1 when a car leaves.",
      image: "/images/car.png",
      technologies: ["Digital Logic", "7-Segment Display", "Counter Circuits"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Monostable Circuit",
      description:
        "Designed and implemented a controlled stable state or pulse generator circuit using IC555 for precise timing applications.",
      image: "/images/monostable.png",
      technologies: ["IC555", "Analog Electronics", "Pulse Generation"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-header reveal">
          <h2>My Work</h2>
          <p>Recent projects I've worked on</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card stagger-item">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="btn-link">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className="btn-link">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
