import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="projects-header reveal">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Let's <span>Talk</span></h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi? My inbox is always open! 💌
        </p>
      </div>

      <div className="contact-inner">
        <div className="contact-items reveal reveal-delay-1">
          <div className="contact-item">
            <div className="contact-item-icon"><FaEnvelope /></div>
            <div className="contact-item-text">
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">fulla@email.com</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon"><FaGithub /></div>
            <div className="contact-item-text">
              <span className="contact-item-label">GitHub</span>
              <span className="contact-item-value">github.com/fuuuulla</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon"><FaLinkedin /></div>
            <div className="contact-item-text">
              <span className="contact-item-label">LinkedIn</span>
              <span className="contact-item-value">linkedin.com/in/fulla</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon"><FaMapMarkerAlt /></div>
            <div className="contact-item-text">
              <span className="contact-item-label">Location</span>
              <span className="contact-item-value">Algeria dz </span>
            </div>
          </div>
        </div>

        <form className="contact-form reveal reveal-delay-2" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Sara Alami" />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input type="email" placeholder="sara@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell me about your project... ✨" />
          </div>
          <button type="submit" className="form-submit">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}