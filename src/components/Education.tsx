import { GraduationCap, Calendar, MapPin, Clock } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { translations, Language } from '@/lib/i18n';

interface EducationProps {
  language: Language;
}

export default function Education({ language }: EducationProps) {
  const t = translations[language];
  const { education } = portfolioData;

  // Map education data with translations
  const getTranslatedEducation = (edu: any) => {
    const institutionKey = edu.institution.toLowerCase();
    const translatedData = t.education[institutionKey as keyof typeof t.education];
    
    return {
      ...edu,
      degree: translatedData?.degree || edu.degree,
      period: translatedData?.period || edu.period,
      location: translatedData?.location || edu.location,
      status: translatedData?.status || edu.status
    };
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.education.title}
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => {
              const translatedEdu = getTranslatedEducation(edu);
              return (
                <div
                  key={index}
                  className="glass-subtle p-8 group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 rounded-2xl"
                >
                  <div className="flex items-start gap-6">
                    {/* Education icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>

                    {/* Education details */}
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {edu.institution}
                          </h3>
                          <h4 className="text-lg font-semibold text-primary mb-3">
                            {translatedEdu.degree}
                          </h4>
                        </div>
                        
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          <Clock className="h-4 w-4" />
                          {translatedEdu.status}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {translatedEdu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {translatedEdu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}