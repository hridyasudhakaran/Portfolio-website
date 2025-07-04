import "./Experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "Joint Secretary",
      company: "IEEE SB EXECOM - Electron Devices Society",
      location: "NIT Calicut",
      duration: "Feb 2024 - Present",
      description:
        "Assisted in organizing technical workshops, seminars, and guest lectures on semiconductor devices, VLSI, and emerging technologies.",
      link: "https://ieeesbnitc.in/",
    },
    {
      title: "VLSI Design Intern",
      company: "Junior Intern",
      location: "NIT Calicut",
      duration: "June 2024 - Present",
      description:
        "Working on the design and simulation of an 8-to-256 decoder using both analog and digital VLSI methodologies.",
    },
    {
      title: "Junior Executive",
      company: "Industrial and Planning Forum",
      location: "NIT Calicut",
      duration: "Feb 2024 - Present",
      description:
        "Managed logistics, communication, and documentation for forum activities, ensuring smooth operations.",
      link: "https://www.instagram.com/ipf.nitc/",
    },
    {
      title: "Junior Executive - Tech Team",
      company: "Tathva NIT Calicut",
      location: "NIT Calicut",
      duration: "Oct 2023 - Jan 2024",
      description: "Collaborated with a cross-functional team to troubleshoot and resolve technical issues.",
    },
    {
      title: "Junior Executive - Program Committee",
      company: "Tathva NIT Calicut",
      location: "NIT Calicut",
      duration: "Oct 2023 - Jan 2024",
      description: "Contributed to content creation, promotions, and outreach to maximize participation.",
    },
    {
      title: "Senior Executive",
      company: "National Service Scheme",
      location: "NIT Calicut",
      duration: "Jan 2024 - Present",
      description:
        "Balancing academics with community service enhanced ability to manage time efficiently and contribute to social causes.",
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header reveal">
          <h2>
            Professional <span className="highlight">Experience</span>
          </h2>
          <p>My journey through various roles and responsibilities</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item stagger-item">
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-duration">{exp.duration}</div>
                </div>
                <p className="experience-description">{exp.description}</p>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="experience-link">
                    View Organization →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
