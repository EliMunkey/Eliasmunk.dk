import React from 'react';
import { POSTS } from '../constants';
import AnimatedSection from './AnimatedSection';
import { Quote } from 'lucide-react';

const Thoughts: React.FC = () => {
  return (
    <section id="thoughts" className="py-32 bg-danish-sand relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-danish-charcoal mb-6">Perspectives</h2>
          <div className="h-1 w-12 bg-slate-300 mx-auto"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
            {POSTS.map((post, index) => (
                <AnimatedSection key={index} delay={index * 100} className="h-full">
                    <div className="bg-white p-10 h-full shadow-sm border border-slate-100 rounded-sm hover:shadow-lg transition-shadow duration-500 flex flex-col group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-danish-charcoal transition-colors duration-500"></div>
                        
                        <div className="mb-6 flex justify-between items-start">
                             <Quote className="text-slate-200 w-10 h-10 transform -scale-x-100 group-hover:text-slate-300 transition-colors duration-300" />
                             <span className="text-xs font-bold tracking-widest uppercase text-slate-400 border border-slate-200 rounded-full px-3 py-1">{post.date}</span>
                        </div>

                        <h3 className="font-serif text-2xl text-danish-charcoal mb-6 leading-tight group-hover:text-slate-700">
                            {post.title}
                        </h3>
                        
                        <div className="prose prose-slate max-w-none flex-grow">
                            <p className="text-slate-600 font-light leading-relaxed whitespace-pre-line text-sm md:text-base">
                                {post.content}
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Thoughts;