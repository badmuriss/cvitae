export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills", 
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      viewProjects: "View Projects",
      downloadCV: "Download CV"
    },
    about: {
      title: "About Me",
      location: "Location"
    },
    skills: {
      title: "Skills & Technologies"
    },
    experience: {
      title: "Experience"
    },
    projects: {
      title: "Projects",
      searchPlaceholder: "Search projects...",
      filterByTech: "Filter by technology:",
      allTechnologies: "All Technologies",
      viewGithub: "GitHub",
      viewLive: "Live Demo",
      moreDetails: "More Details"
    },
    contact: {
      title: "Get In Touch",
      name: "Name",
      email: "Email", 
      message: "Message",
      send: "Send Message",
      or: "or"
    },
    footer: {
      copyright: "© 2025 Murilo Moura. All rights reserved.",
      builtWith: "Built with React & TypeScript"
    }
  },
  "pt-BR": {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      experience: "Experiência", 
      projects: "Projetos",
      contact: "Contato"
    },
    hero: {
      viewProjects: "Ver Projetos",
      downloadCV: "Baixar CV"
    },
    about: {
      title: "Sobre Mim",
      location: "Localização"
    },
    skills: {
      title: "Habilidades & Tecnologias"
    },
    experience: {
      title: "Experiência"
    },
    projects: {
      title: "Projetos",
      searchPlaceholder: "Buscar projetos...",
      filterByTech: "Filtrar por tecnologia:",
      allTechnologies: "Todas as Tecnologias",
      viewGithub: "GitHub",
      viewLive: "Demonstração",
      moreDetails: "Mais Detalhes"
    },
    contact: {
      title: "Entre em Contato",
      name: "Nome",
      email: "Email",
      message: "Mensagem", 
      send: "Enviar Mensagem",
      or: "ou"
    },
    footer: {
      copyright: "© 2025 Murilo Moura. Todos os direitos reservados.",
      builtWith: "Desenvolvido com React & TypeScript"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;