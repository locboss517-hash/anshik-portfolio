import React from 'react';
import { INTERESTS_DATA } from '../data/portfolioData';
import { Lightbulb, Rocket, Target, Megaphone, Boxes, Cpu } from 'lucide-react';

export const InterestsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Target className="w-5 h-5" />;
    }
  };

  return (
    <section id="interests" className="py-20 sm:py-28 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-medium text-electric uppercase tracking-widest mb-3">
            EXPLORATION & FOCUS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-charcoal-950 mb-4">
            What I'm Interested In
          </h2>
          <p className="text-base text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600">
            Disciplines and domains I actively read about, study through case breakdowns, and experiment with as an aspiring entrepreneur.
          </p>
        </div>

        {/* 6 Cards in 3-column desktop grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS_DATA.map((item, index) => (
            <div
              key={item.id}
              className="morphism-card rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-charcoal-500/80 dark:hover:border-charcoal-600 light:hover:border-charcoal-400 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-200 flex items-center justify-center text-charcoal-200 dark:text-charcoal-200 light:text-charcoal-800 transition-colors group-hover:text-electric group-hover:border-electric/40">
                  {getIcon(item.iconName)}
                </div>
                <span className="text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white dark:text-white light:text-charcoal-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="pt-3 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200 flex items-center gap-1.5 text-xs font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500">
                <span className="w-1.5 h-1.5 rounded-full bg-electric/80" />
                <span>{item.focusArea}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
