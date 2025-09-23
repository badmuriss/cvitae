import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';
import { translations, Language } from '@/lib/i18n';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];
  const { personal } = portfolioData;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    if (language === 'pt-BR') {
      link.href = '/CV - Murilo - PTBR.pdf';
      link.download = 'CV - Murilo Moura - PTBR.pdf';
    } else {
      link.href = '/CV - Murilo.pdf';
      link.download = 'CV - Murilo Moura.pdf';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 md:-top-40 -right-20 md:-right-40 w-40 md:w-80 h-40 md:h-80 bg-primary/10 rounded-full blur-2xl md:blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 w-40 md:w-80 h-40 md:h-80 bg-accent/10 rounded-full blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image placeholder */}
          <div className="w-36 h-36 md:w-56 md:h-56 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl shadow-primary/20 overflow-hidden">
            <img 
              src="/hero.png" 
              alt="Murilo Moura Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {personal.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            {t.personal.role}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.personal.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToProjects}
              className="group"
            >
              {t.hero.viewProjects}
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={downloadCV}
              className="group"
            >
              <Download className="mr-2 h-4 w-4 transition-transform" />
              {t.hero.downloadCV}
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}