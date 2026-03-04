import { FaDownload } from "react-icons/fa"; // icon download
import "../App.css";

export default function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/FullaCV.pdf";  // fichier f public folder
    link.download = "FullaCV.pdf";
    link.click();
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Fulla 👩‍💻</span>
        </h1>
        <p>Fullstack Developer | React | Laravel | WordPress</p>
        <button className="download-btn" onClick={downloadCV}>
          <FaDownload style={{ marginRight: "8px" }} />
          Download CV
        </button>
      </div>
      <div className="hero-image"></div>
    </section>
  );
}