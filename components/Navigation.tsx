import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ section, label }: { section: string, label: string }) => (
    <button 
      onClick={() => scrollToSection(section)} 
      className="relative group py-1 px-1"
    >
      <span className="text-slate-600 group-hover:text-danish-charcoal transition-colors duration-300">{label}</span>
      <span className="absolute bottom-0 left-0 w-full h-px bg-danish-charcoal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
    </button>
  );

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="font-serif text-xl font-semibold text-danish-charcoal tracking-tight cursor-pointer hover:opacity-70 transition-opacity duration-300"
          onClick={() => scrollToSection('hero')}
        >
          EM.
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <NavLink section="about" label="About" />
          <NavLink section="experience" label="Experience" />
          <NavLink section="thoughts" label="Perspectives" />
          <NavLink section="contact" label="Contact" />
        </div>
        {/* Mobile menu placeholder - simplistic for now */}
        <div className="md:hidden">
             <NavLink section="contact" label="Contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;