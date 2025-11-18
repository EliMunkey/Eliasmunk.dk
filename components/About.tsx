import React from 'react';
import { ABOUT_TEXT, SKILLS, EDUCATION } from '../constants';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-danish-sand">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <AnimatedSection>
                <img 
                    src="https://picsum.photos/800/1000?grayscale" 
                    alt="Abstract Danish Design" 
                    className="w-full h-[500px] object-cover rounded-sm shadow-2xl filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
            </AnimatedSection>
            <AnimatedSection delay={200}>
                <h2 className="font-serif text-4xl text-danish-charcoal mb-8">Resumé</h2>
                <p className="text-lg text-slate-600 leading-loose whitespace-pre-line">
                    {ABOUT_TEXT}
                </p>
                
                <div className="mt-12">
                    <h3 className="font-serif text-2xl text-danish-charcoal mb-4">Education</h3>
                    {EDUCATION.map((edu, idx) => (
                        <div key={idx} className="border-l-2 border-slate-300 pl-4">
                            <div className="font-medium text-slate-900">{edu.institution}</div>
                            <div className="text-slate-600">{edu.degree}</div>
                            <div className="text-sm text-slate-400 mt-1">{edu.year}</div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </div>

        {/* Skills Grid */}
        <AnimatedSection>
            <div className="bg-white p-12 shadow-sm border border-slate-100 rounded-sm">
                <h3 className="font-serif text-3xl text-center text-danish-charcoal mb-12">Competencies</h3>
                <div className="grid md:grid-cols-3 gap-12">
                    {SKILLS.map((skillGroup, idx) => (
                        <div key={idx} className="text-center">
                            <h4 className="text-sm uppercase tracking-widest font-semibold text-slate-400 mb-6 border-b border-slate-100 pb-2">
                                {skillGroup.category}
                            </h4>
                            <ul className="space-y-3">
                                {skillGroup.items.map((skill, sIdx) => (
                                    <li key={sIdx} className="text-slate-700 font-light text-lg">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default About;
