import "./Education.css";

function Education({ data }) {
  return (
    <section id="education" className="education-section">
      <div className="section-shell">
        <span className="eyebrow">Education</span>
        <h2 className="section-title">Academic path</h2>

        <div className="timeline">
          {data.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-dot" />
              <div className="timeline-card card">
                <span>{item.years}</span>
                <h3>{item.title}</h3>
                <p className="place">{item.place}</p>
                <p>{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
