"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header reveal">
          <h2>Get In Touch</h2>
          <p>Let's work together on  next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info reveal">
            <h3>let's connect</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-item stagger-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>hridyasudhakaran2005@gmail.com</p>
                </div>
              </div>

              <div className="contact-item stagger-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9778144469</p>
                </div>
              </div>

              <div className="contact-item stagger-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>NIT Calicut, Kerala</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/hridya-sudhakaran-145713270/" className="social-link">
                LinkedIn
              </a>
              <a href="https://github.com/hridyasudhakaran" className="social-link">
                GitHub
              </a>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
