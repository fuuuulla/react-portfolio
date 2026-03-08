import {
  FaReact, FaLaravel, FaWordpress, FaJava, FaPhp,
  FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiJavascript, SiVite } from "react-icons/si";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Java", icon: <FaJava /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Database Design", icon: <FaDatabase /> },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header reveal">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">My <span>Skills</span></h2>
        <p className="section-subtitle">
          Technologies I use every day to build modern, scalable and beautiful web applications.
        </p>
      </div>

      <div className="skills-categories">
        {categories.map((cat, i) => (
          <div key={i} className={`skill-category reveal reveal-delay-${i + 1}`}>
            <p className="skill-category-title">{cat.label}</p>
            <div className="skills-list">
              {cat.skills.map((skill, j) => (
                <span key={j} className="skill-pill">
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}