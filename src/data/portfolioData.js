export const profile = {
  name: "Meropi Apostolaki",
  role: "Computer Science Student",
  tagline: "Software Developer & UX/UI Enthusiast",
  email: "meropi.apostolaki@gmail.com",
  location: "Athens, Greece",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/MerApost", short: "GH" },
    { label: "LinkedIn", url: "#", short: "in" },
    { label: "Instagram", url: "#", short: "IG" }
  ],
  about: {
    eyebrow: "About me",
    title: "I build clean, practical and user-friendly digital experiences.",
    text:
      "I am a Computer Science student at the National and Kapodistrian University of Athens, interested in software development, frontend engineering and UX/UI design. I enjoy creating projects that combine functionality, structure and a polished user experience.",
    cards: [
      { number: "CS", label: "Academic background" },
      { number: "UI", label: "Design-oriented mindset" },
      { number: "DEV", label: "Software projects" }
    ]
  },
  education: [
    {
      years: "2022 — Present",
      title: "BSc in Informatics & Telecommunications",
      place: "National and Kapodistrian University of Athens",
      details:
        "Core studies in programming, algorithms, software engineering, operating systems, databases, compilers and human-computer interaction."
    }
  ],
  skills: [
    { category: "Programming", items: ["C", "C++", "Java", "Python", "SQL"] },
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Responsive UI"] },
    { category: "Tools & Concepts", items: ["Git", "GitHub", "Linux", "Compilers", "UX/UI"] }
  ],
  projects: [
    {
      title: "PawHealth Portal",
      type: "Human-Computer Interaction Project",
      description:
        "A React frontend platform for pet health records, veterinary appointments and lost/found pet reports, designed around clear user flows and accessible UI.",
      stack: ["React", "CSS", "JSON Server", "UX/UI"],
      links: [{ label: "GitHub", url: "#" }, { label: "Demo", url: "#" }]
    },
    {
      title: "Compiler Construction Projects",
      type: "Academic Compiler Design",
      description:
        "Java-based compiler construction work including a recursive-descent arithmetic evaluator, a JFlex/CUP translator and a MiniJava semantic analyzer with symbol tables and type checking.",
      stack: ["Java", "JFlex", "CUP", "MiniJava"],
      links: [{ label: "GitHub", url: "https://github.com/MerApost/Compilers" }]
    },
    {
      title: "Personal Portfolio",
      type: "Frontend Website",
      description:
        "A responsive portfolio website with a cinematic hero section, animated graphics, smooth scrolling and modular React components.",
      stack: ["React", "CSS", "GitHub Pages"],
      links: [{ label: "GitHub", url: "#" }]
    }
  ],
  experience: [
    {
      title: "Academic & Personal Software Projects",
      place: "University and self-directed work",
      details:
        "Development of structured academic projects with emphasis on clean code organization, documentation and user-facing presentation."
    }
  ],
  certifications: [
    { title: "Add your certification here", issuer: "Provider / University / Platform", year: "2026" }
  ],
  languages: [
    { name: "Greek", level: "Native" },
    { name: "English", level: "Professional working proficiency" }
  ]
};
