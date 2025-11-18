import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Thoughts from './components/Thoughts';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="antialiased text-danish-charcoal selection:bg-slate-200 selection:text-danish-charcoal overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Thoughts />
      <Contact />
    </main>
  );
};

export default App;