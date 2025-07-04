import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content reveal">
          <div className="about-image">
            <img src="/images/hridya.jpg" alt="Hridya Sudhakaran" className="about-photo" />
          </div>

          <div className="about-text">
            <h2>I'm Hridya </h2>
            <p className="about-description">
              an Electronics and Communication Engineering undergraduate at National Institute of Technology, Calicut, passionate about VLSI
              design, front-end development, and emerging technologies. Currently maintaining a 7.54 CGPA while working
              on cutting-edge projects .
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name</span>
                <span className="detail-value">Hridya Sudhakaran</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Institution</span>
                <span className="detail-value">NIT Calicut</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">
                  <a href="mailto:hridyasudhakaran2005@gmail.com">hridyasudhakaran2005@gmail.com</a>
                </span>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">6+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Organizations</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">7.54</div>
                <div className="stat-label">CGPA</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
