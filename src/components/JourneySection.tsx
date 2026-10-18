import React from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { Clock, Compass } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'current':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-electric/15 text-electric-light border border-electric/30">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            Current Milestone
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-200 text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300">
            <Clock className="w-3 h-3 text-amber-400" />
            Active Exploration
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-300">
            <Compass className="w-3 h-3 text-charcoal-400" />
            Aspirational Goal
          </span>
        );
    }
  };

  return (
    <section id="journey" className="py-20 sm:py-28 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-medium text-electric uppercase tracking-widest mb-3">
            MY TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-charcoal-950 mb-4">
            Every builder starts somewhere.
          </h2>
          <p className="text-base text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600">
            A transparent view of where I am today as a first-year student and the milestones I'm actively working toward.
          </p>
        </div>

        {/* Minimalist Vertical Timeline */}
        <div className="relative max-w-3xl ml-2 sm:ml-4 pl-6 sm:pl-8 border-l border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-300 space-y-12">
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  item.status === 'current'
                    ? 'bg-electric border-white dark:border-oled ring-4 ring-electric/20'
                    : item.status === 'in-progress'
                    ? 'bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-200 border-charcoal-500'
                    : 'bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 border-charcoal-700'
                }`}
              />

              {/* Timeline Content Card */}
              <div className="morphism-card rounded-xl p-6 transition-all duration-200 hover:border-charcoal-600 dark:hover:border-charcoal-600 light:hover:border-charcoal-400">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-white dark:text-white light:text-charcoal-900 px-2.5 py-1 rounded bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500">
                      {item.subtitle}
                    </span>
                  </div>
                  {getStatusBadge(item.status)}
                </div>

                <h3 className="text-xl font-bold text-white dark:text-white light:text-charcoal-900 mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-0.5 rounded bg-charcoal-900/60 dark:bg-charcoal-900/60 light:bg-charcoal-100 text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
