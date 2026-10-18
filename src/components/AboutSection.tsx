import React from 'react';
import { ABOUT_CARDS } from '../data/portfolioData';
import { Compass, BookOpen, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getCardIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Layers className="w-5 h-5 text-electric" />;
      case 1:
        return <Compass className="w-5 h-5 text-electric" />;
      default:
        return <BookOpen className="w-5 h-5 text-electric" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-medium text-electric uppercase tracking-widest mb-3">
            A LITTLE ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-charcoal-950 mb-5 leading-tight">
            Curious by nature. A builder by mindset.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 leading-relaxed">
            I'm currently pursuing my BBA at JECRC University. As I begin my journey in business, I'm exploring how ideas become products, how startups grow, and how thoughtful decisions create value. I believe in learning by doing, asking better questions, and building something meaningful one step at a time.
          </p>
        </div>

        {/* Exactly 3 cards in a single desktop row (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_CARDS.map((card, idx) => (
            <div
              key={card.number}
              className="morphism-card rounded-xl p-7 transition-all duration-200 hover:-translate-y-1 hover:border-charcoal-500/80 dark:hover:border-charcoal-600 light:hover:border-charcoal-400 group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 tracking-wider">
                  {card.number}
                </span>
                <div className="w-9 h-9 rounded-lg bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-200 flex items-center justify-center transition-colors group-hover:border-electric/50">
                  {getCardIcon(idx)}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white dark:text-white light:text-charcoal-900 mb-3 tracking-tight">
                {card.title}
              </h3>

              <p className="text-sm text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600 leading-relaxed">
                {card.description}
              </p>

              <div className="mt-6 pt-4 border-t border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200 flex items-center justify-between text-xs font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500">
                <span>Core Pillar</span>
                <span className="text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 font-medium">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
