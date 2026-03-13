

const projects = [
  {
    title: "E-commerce Platform",
    desc: "A fully-featured e-commerce app with React frontend, cart system, authentication, and a robust Laravel REST API backend.",
    tags: ["React", "WordPress", "MySQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=700&q=80",
    netlifyLink: "https://supermarchee.netlify.app/",
    live: true,
  },
  {
    title: "Modern Portfolio",
    desc: "An interactive personal portfolio with smooth animations, soft pink aesthetic, and a fully responsive layout built with React and Vite.",
    tags: ["React", "CSS3", "Vite"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80",
    live: true,
  },
  {
    title: "Task Manager App",
    desc: "A collaborative productivity app where teams can create tasks, track progress and manage their workflows seamlessly.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=700&q=80",
    live: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header reveal">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">
          A selection of recent work that showcases my passion for building polished, production-ready applications.
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
              <div className="project-number">0{index + 1}</div>
              {project.live && (
                <div className="project-live-badge">
                  <span className="live-dot" /> live
                </div>
              )}
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              {/* --- أضيفي هذا الجزء هنا --- */}
  {project.live && project.netlifyLink && (
    <a 
      href={project.netlifyLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-link-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '15px',
        padding: '8px 16px',
        backgroundColor: '#eca7e9', // اللون الأخضر الخاص بكِ
        color: 'white',
        borderRadius: '20px',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        transition: '0.3s'
      }}
    >
      Voir le projet en direct <span style={{marginLeft: '8px'}}>🚀</span>
    </a>
  )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}