import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      desc: "React + Laravel backend",
      url: "https://google.com", // hna dir link dyalek
    },
    {
      title: "Portfolio Website",
      desc: "Modern React Design",
      url: "https://github.com", // hna dir link dyalek
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <button
              onClick={() => window.open(project.url, "_blank")}
              className="project-btn"
            >
              <FaExternalLinkAlt style={{ marginRight: "8px" }} />
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}