import React from 'react';
import { CONTACT } from '../constants';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-danish-charcoal text-slate-200 py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
            <h2 className="font-serif text-5xl text-white mb-16">Let's Connect</h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <a 
                    href={`mailto:${CONTACT.email}`}
                    className="flex flex-col items-center p-8 border border-slate-700 rounded-sm transition-all duration-300 group hover:bg-white/5 hover:-translate-y-2 hover:border-slate-500 hover:shadow-xl"
                >
                    <Mail className="w-8 h-8 mb-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
                    <span className="text-lg font-medium text-white">Email</span>
                    <span className="text-sm text-slate-500 mt-2 group-hover:text-slate-300 transition-colors">{CONTACT.email}</span>
                </a>

                <a 
                    href={`https://${CONTACT.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 border border-slate-700 rounded-sm transition-all duration-300 group hover:bg-white/5 hover:-translate-y-2 hover:border-slate-500 hover:shadow-xl"
                >
                    <Linkedin className="w-8 h-8 mb-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
                    <span className="text-lg font-medium text-white">LinkedIn</span>
                    <span className="text-sm text-slate-500 mt-2 group-hover:text-slate-300 transition-colors">Connect with me</span>
                </a>
            </div>

            <div className="flex justify-center gap-8 mt-12 text-slate-500 text-sm">
                <div className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-default">
                    <Phone size={14} />
                    {CONTACT.phone}
                </div>
                <div className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-default">
                    <MapPin size={14} />
                    {CONTACT.location}
                </div>
            </div>
            
            <div className="mt-24 pt-8 border-t border-slate-800 text-xs text-slate-600 font-mono">
                © {new Date().getFullYear()} Elias Munk. Designed with Scandinavian simplicity.
            </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Contact;