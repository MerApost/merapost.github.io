import "./Header.css";

function Header({ navItems, socials }) {
  return (
    <header className="site-header" aria-label="Main navigation">
      <nav className="floating-nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={item.href === "#about" ? "active" : ""}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-socials" aria-label="Social links">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target={social.url === "#" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={social.label}
          >
            {social.label === "GitHub" && (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
            )}
            {social.label === "LinkedIn" && <span className="social-text linkedin">in</span>}
            {social.label === "Instagram" && (
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill-dot" /></svg>
            )}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
