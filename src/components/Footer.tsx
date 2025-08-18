import { Heart } from 'lucide-react';
import { translations, Language } from '@/lib/i18n';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="glass-nav border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              {t.footer.copyright}
            </p>
          </div>

          <div className="flex space-x-6 text-sm">
            {[
              { key: 'about', id: 'about' },
              { key: 'skills', id: 'skills' },
              { key: 'experience', id: 'experience' },
              { key: 'projects', id: 'projects' },
              { key: 'contact', id: 'contact' }
            ].map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}