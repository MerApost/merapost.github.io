import "./Skills.css";

function Skills({ data }) {
  return (
    <section id="skills" className="skills-section grid-bg">
      <div className="section-shell skills-layout">
        <div>
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Tools I use to build ideas</h2>
          <p className="section-copy">
            A mix of programming fundamentals, frontend technologies and design-oriented thinking.
          </p>
        </div>

        <div className="skill-cards">
          {data.map((group) => (
            <article className="skill-card card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
