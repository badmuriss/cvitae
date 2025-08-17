import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Murilo Moura",
    role: "Full-Stack Developer",
    tagline: "Building scalable solutions with modern technologies",
    bio: "Passionate full-stack developer with expertise in Java, Spring Boot, React, and cloud technologies. I create robust, user-focused applications with clean code and modern practices.",
    location: "Brazil",
    email: "murilomoura2005@gmail.com",
    github: "https://github.com/badmuriss",
    linkedin: "https://www.linkedin.com/in/murilooo/"
  },
  skills: [
    { name: "Java", category: "language" },
    { name: "Spring Boot", category: "framework" },
    { name: "TypeScript", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "React", category: "framework" },
    { name: "Angular", category: "framework" },
    { name: "Docker", category: "tool" },
    { name: "SQL", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "Azure AD", category: "cloud" },
    { name: "Azure Key Vault", category: "cloud" },
    { name: "Flutter", category: "framework" },
    { name: "Dart", category: "language" },
    { name: "i18n", category: "tool" },
    { name: "l10n", category: "tool" },
    { name: "MongoDB", category: "database" }
  ],
  experience: [
    {
      company: "Globant",
      role: "Full-Stack Developer",
      period: "2023 - Present",
      location: "Remote",
      achievements: [
        "Developed scalable microservices using Java and Spring Boot",
        "Built responsive web applications with React and Angular",
        "Implemented cloud solutions on Azure with secure authentication"
      ]
    },
    {
      company: "Iteris",
      role: "Software Developer",
      period: "2022 - 2023",
      location: "Brazil",
      achievements: [
        "Created enterprise applications with modern frameworks",
        "Collaborated on international localization projects",
        "Optimized database performance and implemented CI/CD pipelines"
      ]
    }
  ],
  projects: [
    {
      name: "Alcoolize",
      description: "Multi-language drinking game built in Flutter.",
      tags: ["Flutter", "Dart", "i18n", "l10n"],
      year: 2024,
      githubUrl: "https://github.com/badmuriss/alcoolize",
      liveUrl: "https://alcoolize.outis.com.br/"
    },
    {
      name: "QuikPad",
      description: "Fast formatted notes and code snippets.",
      tags: ["React", "TypeScript", "MongoDB", "Docker"],
      year: 2025,
      githubUrl: "https://github.com/badmuriss/quikpad",
      liveUrl: "https://quikpad.cc/"
    },
    {
      name: "PWVault",
      description: "Password manager backed by Azure Key Vault.",
      tags: ["Java", "Spring Boot", "Angular", "Azure AD", "Azure Key Vault"],
      year: 2024,
      githubUrl: "https://github.com/badmuriss/pwvault"
    }
  ]
};