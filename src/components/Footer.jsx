import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            
            <p>
               Let's build something amazing together.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="mailto:hridyasudhakaran2005@gmail.com" className="social-link">
                Email
              </a>
              <a href="https://www.linkedin.com/in/hridya-sudhakaran-145713270/" className="social-link">
                LinkedIn
              </a>
              <a href="https://github.com/hridyasudhakaran" className="social-link">
                GitHub
              </a>
              <a href="https://ieeesbnitc.in/" className="social-link">
                IEEE SB
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hridya Sudhakaran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
