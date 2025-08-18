import { useState } from 'react';
import { Github, ExternalLink, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { portfolioData } from '@/data/portfolio';
import { translations, Language } from '@/lib/i18n';
import { Project } from '@/types/portfolio';

interface ProjectsProps {
  language: Language;
}

export default function Projects({ language }: ProjectsProps) {
  const t = translations[language];
  const { projects } = portfolioData;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('');

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  // Filter projects based on search and technology
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = !selectedTech || project.tags.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  const ProjectCard = ({ project }: { project: Project }) => {
    const projectKey = project.name.toLowerCase();
    const translatedDescription = t.projects.list[projectKey as keyof typeof t.projects.list]?.description || project.description;
    
    return (
    <div className="glass-card p-6 group h-[500px]">
      <div className="flex flex-col h-full">
        {/* Project image placeholder */}
        <div className="w-full h-48 mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center overflow-hidden">
          <img 
            src={`/projects/${projectKey}.png`}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
            {project.year}
          </span>
        </div>
      
      <p className="text-foreground/80 mb-4 leading-relaxed flex-grow">
        {translatedDescription}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
            onClick={() => setSelectedTech(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="group/btn"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
              {t.projects.viewGithub}
            </a>
          </Button>
          
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="group/btn"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                {t.projects.viewLive}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.projects.title}
          </h2>

          {/* Filters */}
          <div className="glass-card p-6 mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t.projects.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass"
                />
              </div>

              {/* Technology filter */}
              <div className="flex items-center gap-3">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="flex-1 h-10 px-3 rounded-xl glass border border-border bg-transparent text-foreground focus:ring-2 focus:ring-primary"
                >
                  <option value="">{t.projects.allTechnologies}</option>
                  {allTechnologies.map(tech => (
                    <option key={tech} value={tech} className="bg-card">
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active filters */}
            {(searchTerm || selectedTech) && (
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">{t.projects.activeFilters}</span>
                {searchTerm && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {t.projects.search}: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-2 hover:text-primary-hover"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedTech && (
                  <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm">
                    {t.projects.tech}: {selectedTech}
                    <button
                      onClick={() => setSelectedTech('')}
                      className="ml-2 hover:text-accent"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t.projects.noProjects}</h3>
              <p className="text-muted-foreground">{t.projects.adjustCriteria}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}