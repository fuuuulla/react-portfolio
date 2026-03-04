export default function Skills() {
  const skills = ["React", "Laravel", "WordPress", "Java", "PHP"];
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
}