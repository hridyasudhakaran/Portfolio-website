import "./Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "VLSI & Hardware",
      skills: [
        "Cadence Virtuoso",
        "LT Spice",
        "TSMC 180nm",
        "Digital Electronics",
        "Analog Circuits",
        "Circuit Simulation",
      ],
    },
    {
      title: "Programming",
      skills: [
        "Python",
        "JavaScript",
        "C++",
        "Object Oriented Programming",
        "Data Structures",
        "Algorithms",
      ],
    },
    {
      title: "Web Development",
      skills: [
        "HTML/CSS",
        "JavaScript",
        "Responsive Design",
        "Front-end Development",
        "UI/UX Design",
        "DOM Manipulation",
      ],
    },
    {
      title: "Tools & Software",
      skills: ["Cadence Virtuoso", "LT Spice", "Git", "PCB Design", "Debugging", "Project Management"],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header reveal">
          <h2>Skills & Technologies</h2>
          <p>The tools and technologies I use to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category stagger-item">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
