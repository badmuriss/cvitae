import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Murilo Moura",
    role: "Software Developer",
    tagline: "Automating enterprise workflows and building full-stack applications",
    bio: "Software developer and Information Systems student at FIAP with proven success automating enterprise workflows and building full-stack applications. Proficient in Java/Spring Boot, JavaScript/React, Azure Logic Apps and Docker. Delivered solutions that cut manual effort by 60% and sustained a 97% CSAT. Strong collaborator, adept at translating complex business requirements into secure, maintainable, high-performance systems.",
    location: "São Paulo, Brazil",
    email: "murilomoura2005@gmail.com",
    github: "https://github.com/badmuriss",
    linkedin: "https://www.linkedin.com/in/murilooo/"
  },
  skills: [
    { name: "Java", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "C#", category: "language" },
    { name: "Python", category: "language" },
    { name: "Spring Boot", category: "framework" },
    { name: "Hibernate", category: "framework" },
    { name: "React", category: "framework" },
    { name: "Angular", category: "framework" },
    { name: "Vue.js", category: "framework" },
    { name: ".NET", category: "framework" },
    { name: "SQL", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "SQL Server", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Azure", category: "cloud" },
    { name: "Azure Logic Apps", category: "cloud" },
    { name: "Azure Entra ID", category: "cloud" },
    { name: "GCP", category: "cloud" },
    { name: "Docker", category: "tool" },
    { name: "PowerShell", category: "tool" },
    { name: "Maven", category: "tool" },
    { name: "Gradle", category: "tool" }
  ],
  experience: [
    {
      company: "Globant",
      role: "Software Developer, Jr",
      period: "Dec. 2024 – Present",
      location: "São Paulo, Brazil",
      linkedinUrl: "https://www.linkedin.com/company/globant",
      achievements: [
        "Supported CAP Platform, a comprehensive workflow management solution, serving clients across multiple industries",
        "Architected comprehensive workflow automation solutions on the CAP Platform using Azure Logic Apps and custom C# & PowerShell Azure Entra ID connectors, reducing manual processing time by 60% and cutting error rates by 45%",
        "Enforced business-rule validation in every process flow, improving data integrity and compliance across 10+ enterprise clients",
        "Maintained a 97% customer satisfaction (CSAT) score by delivering rapid incident resolution, thorough root-cause analysis, and proactive performance tuning"
      ]
    },
    {
      company: "Iteris",
      role: "Software Developer, Jr",
      period: "Aug. 2024 – Dec. 2024",
      location: "São Paulo, Brazil",
      linkedinUrl: "https://www.linkedin.com/company/iteris-consultoria-e-software/",
      achievements: [
        "Developer at R&D PromptBot, an AI-prompt management platform that streamlines the creation and reuse of prompts for generative AI workflows",
        "Ensured reliable AI outputs by standardizing prompt templates and validation rules",
        "Developed Java services with Spring Boot, Gradle, and PostgreSQL to manage templates and inject user data",
        "Hardened application security with Spring Security and Azure Entra ID RBAC, eliminating unauthorized-access incidents",
        "Partnered with front-end developers to refine the React interface, making prompt setup more intuitive"
      ]
    }
  ],
  projects: [
    {
      name: "Alcoolize",
      description: "Multi-language drinking game built in Flutter.",
      tags: ["Flutter", "Dart", "i18n", "l10n"],
      year: 2025,
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
      name: "nanii.icu",
      description: "Modern URL shortener and link hub creator with QR code generation.",
      tags: ["React", "TypeScript", "Express", "MongoDB", "Docker"],
      year: 2025,
      githubUrl: "https://github.com/badmuriss/nanii.icu",
      liveUrl: "https://nanii.icu"
    },
    {
      name: "CSFloat MCP",
      description: "MCP server for searching CS2 skins on CSFloat marketplace.",
      tags: ["Python", "MCP", "AI"],
      year: 2025,
      githubUrl: "https://github.com/badmuriss/csfloat-mcp"
    },
    {
      name: "PWVault",
      description: "Password manager backed by Azure Key Vault.",
      tags: ["Java", "Spring Boot", "Angular", "Azure Entra ID", "Azure Key Vault"],
      year: 2024,
      githubUrl: "https://github.com/badmuriss/pwvault"
    },
    {
      name: "64ers",
      description: "Simple Vue.js application for encoding files to Base64 and decoding Base64 strings back into downloadable files with automatic mime detection.",
      tags: ["Vue.js", "JavaScript", "Base64"],
      year: 2024,
      githubUrl: "https://github.com/badmuriss/64ers",
      liveUrl: "https://64ers.outis.com.br/"
    }
  ],
  education: [
    {
      institution: "FIAP",
      degree: "BS, Information Systems",
      period: "Feb. 2023 – Dec, 2026", 
      location: "São Paulo, Brazil",
      status: "In Progress"
    }
  ],
  languages: [
    {
      name: "Portuguese",
      level: "Native",
      proficiency: "native"
    },
    {
      name: "English",
      level: "C2",
      proficiency: "fluent"
    },
    {
      name: "Spanish",
      level: "B2", 
      proficiency: "advanced"
    }
  ]
};