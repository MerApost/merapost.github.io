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
    title: "Hello! You want to get to know me better;",
    text:
      "I am a Computer Science student at the National and Kapodistrian University of Athens, with an interest in software development, frontend engineering and UX/UI design. I enjoy creating projects that combine functionality, clean structure and thoughtful user experience. Outside of tech, I love traveling, exploring new cultures, trying new flavors, and finding inspiration in fashion, music and movies.",
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
        "My studies have provided me with knowledge in programming, algorithms, software engineering, operating systems, databases, compilers, human-computer interaction, mathematics, computer architecture, networks and signals. I also hold a certificate of pedagogical competence, which has helped me develop communication, presentation and educational skills."
    }
  ],
  skills: [
    { category: "Programming", items: ["C", "C++", "Java", "Python", "SQL", "Assembly", "Bash"] },
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Responsive UI"] },
    { category: "Tools & Concepts", items: ["Git", "GitHub", "Linux", "UX/UI", "MySQL", "Figma", "LaTeX", "VS Code", "MATLAB"] }
  ],
  projects: [
    {
      title: "PetHealth",
      type: "Human-Computer Interaction Project",
      description:
        "A React frontend platform for pet health records, veterinary appointments and lost/found pet reports, designed around clear user flows and accessible UI.",
      stack: ["React", "CSS", "JSON Server", "UX/UI"],
      links: [
        { label: "GitHub", url: "https://github.com/MerApost/Website-PetHealth" }
      ]
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
      title: "Software Systems Analysis & Design",
      type: "Academic Systems Design Project",
      description:
        "Analysis and design of a digital collaboration platform through requirements modeling, UML diagrams, data-flow diagrams, design patterns and a structured decision table.",
      stack: ["UML", "DFD", "Design Patterns", "StarUML"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/MerApost/Analysis-and-Design-of-Sotware-Systems-Course"
        }
      ]
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
