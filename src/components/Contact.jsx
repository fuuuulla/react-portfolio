import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const SERVICE_ID = "service_o5m6j7k";
    const TEMPLATE_ID = "template_xxno6vk";
    const PUBLIC_KEY = "pubdg8GzfTiofb8mX";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully! ✅");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. ❌");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-inner">

        {/* Contact Info */}
        <div className="contact-items reveal reveal-delay-1">
          
          <div className="contact-item">
            <div className="contact-item-icon"><FaEnvelope /></div>
            <div className="contact-item-text">
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">boudoumifella@gmail.com</span>
            </div>
          </div>

          <div className="contact-item">
    <div className="contact-item-icon"><FaGithub /></div>
    <div className="contact-item-text">
      <span className="contact-item-label">GitHub</span>
      <a 
        href="https://github.com/fuuuulla" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-item-value"
      >
        github.com/fuuuulla
      </a>
    </div>
  </div>

        

          <div className="contact-item">
            <div className="contact-item-icon"><FaMapMarkerAlt /></div>
            <div className="contact-item-text">
              <span className="contact-item-label">Location</span>
              <span className="contact-item-value">Algeria dz</span>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <form
          ref={form}
          className="contact-form reveal reveal-delay-2"
          onSubmit={sendEmail}
        >
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Sara Alami"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="sara@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project... ✨"
              required
            />
          </div>

          <button type="submit" className="form-submit">
            <FaPaperPlane /> Send Message
          </button>

          {status && (
            <p
              className="status-message"
              style={{ marginTop: "10px", fontSize: "0.9rem" }}
            >
              {status}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}