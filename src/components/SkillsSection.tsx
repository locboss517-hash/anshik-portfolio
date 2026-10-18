import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { BookMarked } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-medium text-electric uppercase tracking-widest mb-3">
            FOUNDATIONAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-charcoal-950 mb-4">
            Currently Learning & Exploring
          </h2>
          <p className="text-base text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600">
            Skills and mental models I am systematically practicing through university coursework, self-study, and conceptual projects.
          </p>
        </div>

        {/* Compact Cards Grid (3 cards per row on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.id}
              className="morphism-card rounded-xl p-5 transition-all duration-200 hover:border-charcoal-600 dark:hover:border-charcoal-600 light:hover:border-charcoal-400 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 uppercase tracking-wider">
                  {skill.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-electric opacity-75 group-hover:scale-125 transition-transform" />
              </div>

              <h3 className="text-base font-bold text-white dark:text-white light:text-charcoal-900 mb-2">
                {skill.name}
              </h3>

              <p className="text-xs text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Authentic Philosophy Banner */}
        <div className="p-4 rounded-xl bg-charcoal-950/70 dark:bg-charcoal-950/70 light:bg-charcoal-100/70 border border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-300 flex items-center gap-3 text-xs text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 font-mono">
          <BookMarked className="w-4 h-4 text-electric shrink-0" />
          <span>
            <strong>Authentic Learning Approach:</strong> No superficial percentage progress bars. Real understanding comes from applying frameworks to actual business problems and reflecting on the outcomes.
          </span>
        </div>

      </div>
    </section>
  );
};
