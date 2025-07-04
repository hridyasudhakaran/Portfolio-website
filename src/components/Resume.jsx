"use client"

import "./Resume.css"

const Resume = () => {
  const handleDownloadResume = () => {
    // Create a downloadable resume file
    const resumeContent = `
HRIDYA SUDHAKARAN
Electronics and Communication Engineering
National Institute of Technology, Calicut

Contact Information:
Phone: +91 9778144469
Email: hridyasudhakaran2005@gmail.com
CGPA: 7.54/10.0

SUMMARY
Electronics and Communication Engineering undergrad at NIT Calicut.
Passionate about problem-solving, VLSI designs and Front-end Development.
Quick learner with a keen interest in emerging technologies.

EXPERIENCE
• IEEE SB EXECOM - Joint Secretary (Feb 2024 - Present)
• VLSI Design Intern at NIT Calicut (June 2024 - Present)
• Industrial and Planning Forum - Junior Executive (Feb 2024 - Present)
• Tathva NIT Calicut - Tech Team & Program Committee (Oct 2023 - Jan 2024)
• National Service Scheme - Senior Executive (Jan 2024 - Present)

PROJECTS
• 8-to-256 Decoder (VLSI Design) - June 2024 - Present
• CICADA Interactive Quiz Website - Dec 2024
• Pattern Follower Toy - Feb 2024
• Mini Audio Equalizer - Oct 2024
• Logic Car Parking Counter - April 2024

SKILLS
• VLSI: Cadence Virtuoso, LT Spice, Verilog
• Programming: Python, JavaScript, C/C++
• Web Development: HTML/CSS, JavaScript
• Tools: Git, Linux, Circuit Simulation

CERTIFICATIONS
• Introduction to Front-End Development - Coursera (Jun 2024)
• Programming with JavaScript - Coursera (Jul 2024)

LANGUAGES
• Malayalam (Native)
• English (Professional)
• Hindi (Limited)
    `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Hridya_Sudhakaran_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleViewResume = () => {
    // Open resume in new tab
    window.open("#resume", "_blank")
  }

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-content reveal">
          <div className="resume-icon">📄</div>
          <h2>
            Download My <span className="highlight">Resume</span>
          </h2>
          <p>
            Get a comprehensive overview of my education, experience, projects, and skills. Available in multiple
            formats for your convenience.
          </p>

          <div className="resume-buttons">
            <button className="btn-primary" onClick={handleDownloadResume}>
              Download Resume
            </button>
            <button className="btn-secondary" onClick={handleViewResume}>
              View Online
            </button>
          </div>
        </div>

        <div className="resume-stats">
          <div className="resume-stat stagger-item">
            <div className="resume-stat-number">7.54</div>
            <div className="resume-stat-label">CGPA</div>
          </div>
          <div className="resume-stat stagger-item">
            <div className="resume-stat-number">6+</div>
            <div className="resume-stat-label">Projects</div>
          </div>
          <div className="resume-stat stagger-item">
            <div className="resume-stat-number">5+</div>
            <div className="resume-stat-label">Organizations</div>
          </div>
          <div className="resume-stat stagger-item">
            <div className="resume-stat-number">2</div>
            <div className="resume-stat-label">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
