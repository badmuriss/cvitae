export interface Project {
  name: string;
  description: string;
  tags: string[];
  year: number;
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  linkedinUrl?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'cloud';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
  };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}