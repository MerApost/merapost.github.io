import "./Hero.css";

function Hero({ profile }) {
  const heroImage = `${process.env.PUBLIC_URL}/portfolio.jpg`;

  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay" />
      <div className="hero-grain" />

      <div className="hero-content">
        <h1>{profile.name}</h1>
        <div className="hero-lines">
          <p>{profile.role}</p>
          <p>{profile.tagline}</p>
        </div>
        <a className="scroll-indicator" href="#about" aria-label="Scroll to about section">
          <span aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
