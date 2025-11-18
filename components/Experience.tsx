import React from 'react';
import { JOBS } from '../constants';
import AnimatedSection from './AnimatedSection';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-danish-charcoal mb-6">Erfaring</h2>
          <div className="h-1 w-20 bg-slate-200"></div>
        </AnimatedSection>

        <div className="space-y-24">
            {JOBS.map((job, index) => (
                <AnimatedSection key={index} className="group">
                    <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
                        
                        {/* Left Column: Metadata */}
                        <div className="md:sticky md:top-32">
                            <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                {job.period}
                            </div>
                            <h3 className="font-serif text-2xl text-danish-charcoal group-hover:text-danish-blue transition-colors duration-300">
                                {job.company}
                            </h3>
                            <div className="text-slate-500 mt-1 font-medium">{job.location}</div>
                            <div className="mt-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-danish-mist text-slate-600">
                                <Briefcase size={18} strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="prose prose-slate prose-lg max-w-none">
                            <h4 className="text-xl font-medium text-slate-800 mb-4">{job.role}</h4>
                            <p className="text-slate-600 leading-relaxed mb-6">{job.description}</p>
                            {job.highlights && (
                                <ul className="space-y-3 list-none pl-0">
                                    {job.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start text-slate-600 text-base">
                                            <span className="mr-3 mt-2 block w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 group-hover:bg-indigo-300 transition-colors"></span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {index !== JOBS.length - 1 && (
                        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-slate-200/40 to-transparent"></div>
                    )}
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;