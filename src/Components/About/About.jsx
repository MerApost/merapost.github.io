import "./About.css";

function About({ data }) {
  return (
    <section id="about" className="about-section grid-bg">
      <div className="section-shell about-grid">
        <div>
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="section-title">{data.title}</h2>
          <p className="section-copy">{data.text}</p>

          <div className="about-stats">
            {data.cards.map((card) => (
              <div className="stat-card" key={card.label}>
                <strong>{card.number}</strong>
                <span>{card.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual card" aria-hidden="true">
          <div className="code-window">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <pre>{`const portfolio = {
  name: "Meropi",
  focus: ["Software", "UX/UI"],
  goal: "Create meaningful products"
};`}</pre>
          </div>
          <div className="orbital">
            <span>React</span>
            <span>CSS</span>
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
