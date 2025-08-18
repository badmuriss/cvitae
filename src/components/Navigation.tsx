import { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations, Language } from '@/lib/i18n';

interface NavigationProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to dark theme
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              mobileMenu?.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { key: 'about', id: 'about' },
              { key: 'skills', id: 'skills' },
              { key: 'experience', id: 'experience' },
              { key: 'education', id: 'education' },
              { key: 'languages', id: 'languages' },
              { key: 'projects', id: 'projects' }
            ].map(({ key, id }) => (
              <button
                key={key}
                onClick={() => scrollToSection(id)}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {t.nav[key as keyof typeof t.nav]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onLanguageChange(language === 'en' ? 'pt-BR' : 'en')}
              className="rounded-full"
            >
              <Globe className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4">
          <div className="glass-card p-4 space-y-3">
            {[
              { key: 'about', id: 'about' },
              { key: 'skills', id: 'skills' },
              { key: 'experience', id: 'experience' },
              { key: 'education', id: 'education' },
              { key: 'languages', id: 'languages' },
              { key: 'projects', id: 'projects' }
            ].map(({ key, id }) => (
              <button
                key={key}
                onClick={() => {
                  scrollToSection(id);
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
                className="block w-full text-left py-2 px-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}
            
            <div className="flex items-center justify-center space-x-2 pt-3 border-t border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onLanguageChange(language === 'en' ? 'pt-BR' : 'en')}
                className="rounded-full"
              >
                <Globe className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}