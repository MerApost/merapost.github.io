import { useEffect, useRef } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Certifications from "./Components/Certifications/Certifications";
import Languages from "./Components/Languages/Languages";
import Contact from "./Components/Contact/Contact";
import { profile } from "./data/portfolioData";

function App() {
  const mainRef = useRef(null);
  const pageBackground = `${process.env.PUBLIC_URL}/portfolio.jpg`;

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return undefined;

    const revealSelector = [
      ".eyebrow",
      ".section-title",
      ".section-copy",
      ".stat-card",
      ".about-visual",
      ".timeline-card",
      ".skill-card",
      ".project-card",
      ".experience-card",
      ".cert-card",
      ".language-card",
      ".contact-actions",
      ".contact-socials"
    ].join(",");

    const revealItems = [];

    main.querySelectorAll("section").forEach((section) => {
      section.querySelectorAll(revealSelector).forEach((item, index) => {
        item.dataset.reveal = "";
        item.style.setProperty("--reveal-delay", `${Math.min(index * 85, 340)}ms`);
        revealItems.push(item);
      });
    });

    main.classList.add("reveal-ready");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app" style={{ "--page-background": `url(${pageBackground})` }}>
      <Header navItems={profile.navItems} socials={profile.socials} />
      <Hero profile={profile} />
      <main ref={mainRef}>
        <About data={profile.about} />
        <Education data={profile.education} />
        <Skills data={profile.skills} />
        <Projects data={profile.projects} />
        {profile.experience?.length > 0 && <Experience data={profile.experience} />}
        {profile.certifications?.length > 0 && (
          <Certifications data={profile.certifications} />
        )}
        <Languages data={profile.languages} />
        <Contact profile={profile} />
      </main>
    </div>
  );
}

export default App;
