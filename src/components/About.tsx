import { MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { translations, Language } from '@/lib/i18n';

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  const t = translations[language];
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                {t.personal.bio}
              </p>
              
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{t.about.location}: {personal.location}</span>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.about.quickFacts}</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>💻 {t.about.facts.codingStart}</li>
                    <li>⚡ {t.about.facts.automation}</li>
                    <li>🎯 {t.about.facts.satisfaction}</li>
                    <li>🏠 {t.about.facts.selfHost}</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{t.about.interests}</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>🤖 {t.about.interestsList.aiMl}</li>
                    <li>⚙️ {t.about.interestsList.techHobbyist}</li>
                    <li>🔄 {t.about.interestsList.workflowAutomation}</li>
                    <li>🐳 {t.about.interestsList.dockerizing}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}