const projects = [
  {
    title: "Supermarché",
    desc: "E-commerce platform with product management, shopping cart, secure authentication and responsive design.",
    tags: ["React", "Laravel", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=700&q=80",
    netlifyLink: "https://supermarchee.netlify.app/",
    live: true,
  },
  {
    title: "Site Touristique",
    desc: "Modern tourism website showcasing destinations, services and travel information with a responsive user interface.",
    tags: ["React", "CSS3", "Vite"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80",
    netlifyLink: "https://agence-touristique.netlify.app/",
    live: true,
  },
  {
    title: "Ticketing System",
    desc: "Web-based support ticket management system for tracking, assigning and resolving customer requests efficiently.",
    tags: ["Laravel", "PHP", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=700&q=80",
    netlifyLink: "https://tiketsystem.onrender.com/",
    live: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header reveal">
        <p className="section-label">What I've built</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="section-subtitle">
          A selection of recent work that showcases my passion for building
          polished, production-ready applications.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card reveal reveal-delay-${index + 1}`}
          >
            <div className="project-img-wrap">
              <img src={project.image} alt={project.title} />

              <div className="project-number">
                0{index + 1}
              </div>

              {project.live && (
                <div className="project-live-badge">
                  <span className="live-dot"></span>
                  live
                </div>
              )}
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>

              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.netlifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                Voir le projet 🚀
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}