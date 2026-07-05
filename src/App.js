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
  const pageBackground = `${process.env.PUBLIC_URL}/portfolio.jpg`;

  return (
    <div className="app" style={{ "--page-background": `url(${pageBackground})` }}>
      <Header navItems={profile.navItems} socials={profile.socials} />
      <Hero profile={profile} />
      <main>
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
