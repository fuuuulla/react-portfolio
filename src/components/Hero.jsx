import { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Fullstack Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/FullaCV.pdf";
    link.download = "FullaCV.pdf";
    link.click();
  };

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 80px 10%;
          position: relative;
          background: var(--bg-color);
          overflow: hidden;
        }

        /* --- عودة النجوم المتحركة --- */
        .hero::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #ffb6c1, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 100px 150px, #ff69b4, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 200px 250px, #ffffff, rgba(0,0,0,0));
          background-size: 300px 300px;
          animation: moveStars 120s linear infinite;
          opacity: 0.3;
          z-index: 0;
        }

        @keyframes moveStars {
          from { background-position: 0 0; }
          to { background-position: 1000px 1000px; }
        }

        .hero-content { z-index: 2; max-width: 600px; }

        .hero-greeting {
          color: #ff69b4; /* Pink */
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 10px;
          text-transform: uppercase;
          background: rgba(255, 105, 180, 0.1);
          padding: 5px 15px;
          border-radius: 5px;
          display: inline-block;
        }

        .hero h1 {
          font-size: 3.5rem;
          color: var(--text-color, #2c3e50);
          margin-bottom: 20px;
        }

        body.dark .hero h1 { color: #ffffff; }

        .name, .typing-text { color: #ff69b4; }

        .typing-text {
          border-right: 3px solid #ff69b4;
          padding-right: 5px;
          animation: blink 0.7s infinite;
        }

        @keyframes blink { 50% { border-color: transparent; } }

        /* --- الزر الوردي (Pink Button) --- */
        .btn-primary {
          background: #ff69b4 !important; /* Hot Pink */
          color: #ffffff !important;
          padding: 14px 28px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          font-weight: 900;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4);
          transition: 0.3s ease;
        }

        .btn-primary:hover {
          background: #ff1493 !important; /* Deep Pink */
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.6);
        }

        .btn-outline {
          padding: 14px 28px;
          border-radius: 30px;
          border: 2px solid #ff69b4;
          color: #ff69b4;
          text-decoration: none;
          font-weight: 900;
          transition: 0.3s;
          background: transparent;
        }

        .btn-outline:hover {
          background: #ff69b4;
          color: white !important;
        }

        .hero-avatar {
          font-size: 8rem;
          z-index: 2;
          animation: floating 3s ease-in-out infinite;
          filter: drop-shadow(0 10px 20px rgba(255, 105, 180, 0.3));
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .hero-socials a {
          color: var(--text-color);
          font-size: 1.5rem;
          margin-right: 20px;
          transition: 0.3s;
        }

        .hero-socials a:hover { color: #ff69b4; }

        @media (max-width: 768px) {
          .hero { flex-direction: column-reverse; text-align: center; }
          .hero h1 { font-size: 2.8rem; }
          .hero-btns { justify-content: center; flex-wrap: wrap; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting"> HELLO THERE </p>
          <h1>
            I'm <span className="name">Fulla</span>,<br />
            <span className="typing-text">{text}</span>
          </h1>
          <p className="hero-desc">
            I craft beautiful, high-performance web experiences with a touch of modern aesthetics.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={downloadCV}>
              <FaDownload /> Download CV
            </button>
            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/fuuuulla" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:boudoumifella@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-avatar">👩‍💻</div>
        </div>
      </section>
    </>
  );
}