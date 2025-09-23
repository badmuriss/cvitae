import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { translations, Language } from '@/lib/i18n';

interface LanguagesProps {
  language: Language;
}

const proficiencyColors = {
  native: 'bg-green-500/20 text-green-600 border-green-500/30',
  fluent: 'bg-blue-500/20 text-blue-600 border-blue-500/30',
  advanced: 'bg-purple-500/20 text-purple-600 border-purple-500/30',
  intermediate: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30',
  basic: 'bg-gray-500/20 text-gray-600 border-gray-500/30'
};

const proficiencyWidth = {
  native: 'w-full',
  fluent: 'w-full', // C2 level gets full width
  advanced: 'w-4/6',
  intermediate: 'w-3/6',
  basic: 'w-2/6'
};

const countryFlags = {
  portuguese: '🇧🇷',
  english: '🇺🇸',
  spanish: '🇪🇸'
};

export default function Languages({ language }: LanguagesProps) {
  const t = translations[language];
  const { languages } = portfolioData;

  // Map language data with translations
  const getTranslatedLanguage = (lang: any) => {
    const langKey = lang.name.toLowerCase();
    const translatedName = t.languages.languageNames[langKey as keyof typeof t.languages.languageNames] || lang.name;
    const translatedLevel = t.languages.levels[lang.proficiency as keyof typeof t.languages.levels] || lang.level;
    const flag = countryFlags[langKey as keyof typeof countryFlags] || '🌍';
    
    return {
      ...lang,
      name: translatedName,
      level: translatedLevel,
      flag
    };
  };

  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.languages.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((lang, index) => {
              const translatedLang = getTranslatedLanguage(lang);
              return (
                <div
                  key={index}
                  className="glass-subtle p-6 group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 rounded-2xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-transparent from-primary to-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">{translatedLang.flag}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {translatedLang.name}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${
                        proficiencyColors[lang.proficiency]
                      }`}>
                        {translatedLang.level}
                      </span>
                    </div>
                  </div>

                  {/* Proficiency bar - hidden for native languages */}
                  {lang.proficiency !== 'native' && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Proficiency</span>
                        <span className="text-sm font-medium text-foreground">{lang.level}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ${
                            proficiencyWidth[lang.proficiency]
                          }`}
                          style={{
                            animationDelay: `${index * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}