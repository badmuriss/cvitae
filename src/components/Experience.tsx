import { Building, Calendar, MapPin, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { translations, Language } from '@/lib/i18n';

interface ExperienceProps {
  language: Language;
}

export default function Experience({ language }: ExperienceProps) {
  const t = translations[language];
  const { experience } = portfolioData;

  // Map experience data with translations
  const getTranslatedExperience = (exp: any, index: number) => {
    const companyKey = exp.company.toLowerCase();
    const translatedData = t.experience.companies[companyKey as keyof typeof t.experience.companies];
    
    return {
      ...exp,
      role: translatedData?.role || exp.role,
      achievements: translatedData?.achievements || exp.achievements
    };
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.experience.title}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {experience.map((exp, index) => {
                const translatedExp = getTranslatedExperience(exp, index);
                return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="glass-card p-6 group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <Building className="h-5 w-5 text-primary mr-2" />
                          <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                        </div>
                        {exp.linkedinUrl && (
                          <a
                            href={exp.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                            title="Company LinkedIn"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">{translatedExp.role}</h4>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {translatedExp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}