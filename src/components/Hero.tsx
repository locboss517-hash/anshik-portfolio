import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BuildingBlocksHero } from './BuildingBlocksHero';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const topOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Small Introductory Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 border border-charcoal-700/80 dark:border-charcoal-700/80 light:border-charcoal-300 text-xs font-mono font-medium text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric" />
              <span>{PERSONAL_INFO.role}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-charcoal-950 leading-[1.08] mb-6">
              Learning Business.{' '}
              <span className="text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 block mt-1">
                Building What’s Next.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 leading-relaxed max-w-xl mb-8">
              {PERSONAL_INFO.bio}
            </p>

            {/* Institutional context badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-charcoal-900/60 dark:bg-charcoal-900/60 light:bg-charcoal-100/80 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200">
                <Building2 className="w-3.5 h-3.5 text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600" />
                <span>JECRC University · First Year</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-charcoal-900/60 dark:bg-charcoal-900/60 light:bg-charcoal-100/80 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200">
                <MapPin className="w-3.5 h-3.5 text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600" />
                <span>Jaipur, India</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('journey')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-sm font-semibold bg-electric text-white hover:bg-electric-hover transition-colors shadow-sm flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              >
                <span>Explore My Journey</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-sm font-semibold bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 text-white dark:text-white light:text-charcoal-900 hover:bg-charcoal-800 dark:hover:bg-charcoal-800 light:hover:bg-charcoal-200 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Small Availability Label */}
            <div className="flex items-center gap-2.5 text-xs text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 pt-2 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200 w-full max-w-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">{PERSONAL_INFO.availability}</span>
            </div>

          </div>

          {/* Right Column: Signature Building-Block 3D Visual */}
          <div className="lg:col-span-5 w-full">
            <BuildingBlocksHero />
          </div>

        </div>
      </div>
    </section>
  );
};
