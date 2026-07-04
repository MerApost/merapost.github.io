import "./Projects.css";

function Projects({ data }) {
  return (
    <section id="projects" className="projects-section">
      <div className="section-shell">
        <span className="eyebrow">Projects</span>
        <h2 className="section-title">Selected work</h2>

        <div className="projects-grid">
          {data.map((project, index) => (
            <article className="project-card card" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url === "#" ? undefined : "_blank"}
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
