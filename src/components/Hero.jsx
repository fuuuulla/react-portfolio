import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/FullaCV.pdf";
    link.download = "FullaCV.pdf";
    link.click();
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">HELLO  </p>
        <h1>
          I'm <span className="name">Fulla</span>,<br />
          Fullstack Developer
        </h1>
        <p className="hero-role">
          <strong>React</strong> · <strong>Laravel</strong>  <strong>WordPress</strong> · <strong>MySQL</strong> · <strong>Tailwind CSS</strong>  
        </p>
        <p className="hero-desc">
          I craft beautiful, high-performance web experiences — from pixel-perfect UIs
          to scalable backends, with a passion for clean code and modern design.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={downloadCV}>
            <FaDownload /> Download My CV
          </button>
          <a href="#contact" className="btn-outline">
            Let's Talk
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/fuuuulla" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:boudoumifella@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="hero-image-wrap">
        <div className="hero-avatar">👩‍💻</div>
      </div>
    </section>
  );
}