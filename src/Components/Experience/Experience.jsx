import "./Experience.css";

function Experience({ data }) {
  return (
    <section id="experience" className="experience-section grid-bg">
      <div className="section-shell split-section">
        <div>
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Practical growth</h2>
        </div>

        <div className="experience-list">
          {data.map((item) => (
            <article className="experience-card card" key={item.title}>
              <h3>{item.title}</h3>
              <strong>{item.place}</strong>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
