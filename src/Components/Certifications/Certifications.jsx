import "./Certifications.css";

function Certifications({ data }) {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-shell">
        <span className="eyebrow">Certifications</span>
        <h2 className="section-title">Courses & certificates</h2>

        <div className="certification-grid">
          {data.map((cert) => (
            <article className="cert-card card" key={cert.title}>
              <span>{cert.year}</span>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
