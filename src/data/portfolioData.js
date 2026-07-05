export const profile = {
  name: "Meropi Apostolaki",
  role: "Software Developer & UX/UI Designer",
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
    { label: "LinkedIn", url: "https://www.linkedin.com/in/meropi-apostolaki-411739277", short: "in" },
    { label: "Instagram", url: "https://www.instagram.com/meropi_apostolaki", short: "IG" }
  ],
  about: {
    eyebrow: "About me",
    title: "Hello! Υou want to get to know me better;",
    text:
      "I am a Computer Science student at the National and Kapodistrian University of Athens and I am interested in software development, frontend engineering and UX/UI design. I like to create projects that combine functionality, structure and a thoughtful user experience. When I am not at the computer, I like to travel the world, exploring new flavors, cultures and people. I also love fashion, music and movies",
    cards: [
      { number: "CS", label: "Academic background" },
      { number: "UI", label: "Design-oriented mindset" },
      { number: "DEV", label: "Software projects" }
    ]
  },
  education: [
    {
      years: "2022 — 2027",
      title: "BSc in Informatics & Telecommunications",
      place: "National and Kapodistrian University of Athens",
      details:
        "Knowledge from my studies in programming, algorithms, software engineering, operating systems, databases, compilers and human-computer interaction, mathematics, computer architecture, networks, signals.I also have a certificate of pedagogical competence.Therefore, I am able to train other people and organize presentations or educational seminars successfully and cope with various challenges."
    }
  ],
  skills: [
    { category: "Programming", items: ["C", "C++", "Java", "Python", "SQL", "Assembly", "Bash", "MATLAB"] },
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Responsive UI"] },
    { category: "Tools & Concepts", items: ["Git", "GitHub", "Linux", "Compilers", "UX/UI", "MySQL", "Figma", "LaTeX", "VS Code"] }
  ],
  projects: [
    {
      title: "PetHealth",
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
  /*experience: [
    {
      title: "Academic & Personal Software Projects",
      place: "University and self-directed work",
      details:
        "Development of structured academic projects with emphasis on clean code organization, documentation and user-facing presentation."
    }
  ],*/
  /*certifications: [
    { title: "Add your certification here", issuer: "Provider / University / Platform", year: "2026" }
  ],*/
  languages: [
    { name: "Greek", level: "" },
    { name: "English", level: "" }
  ]
};
