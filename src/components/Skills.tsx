import { portfolioData } from '@/data/portfolio';
import { translations, Language } from '@/lib/i18n';

interface SkillsProps {
  language: Language;
}

const categoryIcons = {
  language: '💻',
  framework: '⚛️',
  tool: '🛠️',
  database: '🗄️',
  cloud: '☁️'
};

const categoryColors = {
  language: 'bg-primary/10 text-primary border-primary/20',
  framework: 'bg-accent/10 text-accent border-accent/20',
  tool: 'bg-success/10 text-success border-success/20',
  database: 'bg-warning/10 text-warning border-warning/20',
  cloud: 'bg-destructive/10 text-destructive border-destructive/20'
};

export default function Skills({ language }: SkillsProps) {
  const t = translations[language];
  const { skills } = portfolioData;

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.skills.title}
          </h2>

          <div className="grid gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t.skills.categories[category as keyof typeof t.skills.categories]}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md ${
                        categoryColors[skill.category]
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}