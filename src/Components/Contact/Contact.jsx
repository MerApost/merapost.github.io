import "./Contact.css";

function Contact({ profile }) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg" />
      <div className="section-shell contact-shell">
        <span className="eyebrow">Contact</span>
        <h2 className="section-title">Let’s build something beautiful.</h2>
        <p className="section-copy">
          Open to academic projects, frontend work, UX/UI ideas and collaborations.
        </p>

        <div className="contact-actions">
          <a className="contact-main" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <span>{profile.location}</span>
        </div>

        <div className="contact-socials">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url === "#" ? undefined : "_blank"}
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
