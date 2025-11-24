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
      linkedinUrl: "https://www.linkedin.com/company/globant",
      period: "May. 2025 - Present",
      location: "São Paulo, Brazil",
      achievements: [
        "Worked as a full-stack developer on the CAP Platform, an Enterprise automation solution, performing maintenance and feature implementation in the platform's core, applying Design Patterns (Repository, Strategy) to ensure scalability, in addition to delivering customized workflows for over 10 corporate clients, integrating systems such as SAP, Protheus, Azure AD, and Google Workspace",
        "Developed customized connectors in C# and REST APIs, worked with operation queues and Job scheduling for task automation, in addition to performing maintenance and support for the transactional notification system via AWS SES",
        "Implemented complex integration solutions using Azure Logic Apps and customized scripts, achieving a 60% reduction in manual processing time and a 45% reduction in the error rate through rigorous business rule validation and exception handling",
        "Maintained 97% CSAT scores through agile incident resolution and proactive performance adjustments, using CI/CD pipelines (Azure DevOps), ensuring code quality with SOLID principles and implementing observability practices (structured logging and audit trails)"
      ]
    },
    {
      company: "Iteris",
      role: "Software Developer, Jr",
      linkedinUrl: "https://www.linkedin.com/company/iteris-consultoria-e-software/",
      period: "Aug. 2024 - May. 2025",
      location: "São Paulo, Brazil",
      achievements: [
        "Worked on the R&D team developing PromptBot, a Generative AI orchestration platform, building robust services in Java (Spring Boot) with Gradle and PostgreSQL, implementing secure access control via OAuth and Azure AD, in addition to managing dynamic data injection into templates.",
        "Integrated the solution with Azure OpenAI, implementing context validation and input sanitization rules to ensure the consistency and security of AI generated responses",
        "Implemented application containerization using Docker and configured CI/CD pipelines in Azure DevOps for automated deploys, also collaborated on frontend optimization in React, improving the tool's usability for end-users",
        "HEnsured system stability by applying SOLID principles and creating a comprehensive Unit and Integration Testing strategy (increasing code coverage), in addition to implementing a template versioning system for change control"
      ]
    }
  ],
  projects: [
    {
      name: "SOBUB AI",
      description: "Silence Occasionally Broken Up By AI - context-aware meme soundboard triggered by conversation analysis.",
      tags: ["Python", "FastAPI", "React", "Whisper", "Docker", "AI"],
      year: 2025,
      githubUrl: "https://github.com/badmuriss/sobub-ai",
      liveUrl: undefined
    },
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