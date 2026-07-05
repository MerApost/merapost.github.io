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
            <span>{profile.email}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
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
