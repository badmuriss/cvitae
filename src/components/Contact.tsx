import { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { portfolioData } from '@/data/portfolio';
import { translations, Language } from '@/lib/i18n';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language];
  const { personal } = portfolioData;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.contact.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="glass"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="glass resize-none"
                  />
                </div>

                <Button type="submit" className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {t.contact.send}
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-6 text-primary">Let's connect!</h3>
                
                <div className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">
                    I'm always interested in discussing new opportunities, 
                    collaborating on exciting projects, or just having a chat 
                    about technology and development.
                  </p>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">{t.contact.or}</p>
                    
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center p-4 glass-card rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    >
                      <Mail className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{personal.email}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-6 text-primary">Social</h3>
                
                <div className="space-y-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <Github className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                  
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}