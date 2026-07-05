import "./Languages.css";

function Languages({ data }) {
  return (
    <section id="languages" className="languages-section grid-bg">
      <div className="section-shell language-shell">
        <div>
          <span className="eyebrow">Languages</span>
          <h2 className="section-title">Communication</h2>
        </div>

        <div className="language-grid">
          {data.map((language) => (
            <article className="language-card card" key={language.name}>
              <h3>{language.name}</h3>
              {language.level && <p>{language.level}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
