import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-50 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
            <span className="inline-block py-1 px-3 mb-6 text-xs font-medium tracking-widest text-slate-500 uppercase border border-slate-200 rounded-full bg-white/50 backdrop-blur-sm">
                Strategy & Product
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-danish-charcoal leading-[1.1] mb-8">
                Elias Munk
            </h1>
            <p className="font-sans text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                Transforming "AI hype" into real outcomes. 
                <span className="block mt-2">Structurer of chaos. Strategic optimist.</span>
            </p>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
            <div className="mt-12 flex justify-center gap-6">
                <a href="#contact" className="group relative px-8 py-3 bg-danish-charcoal text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                    <span className="relative z-10 font-medium group-hover:tracking-wide transition-all duration-300">Get in Touch</span>
                    <div className="absolute inset-0 bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="#experience" className="px-8 py-3 border border-slate-300 text-slate-600 rounded-full transition-all duration-300 hover:bg-white hover:text-danish-charcoal hover:border-slate-400 hover:shadow-md hover:-translate-y-0.5">
                    View Work
                </a>
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;