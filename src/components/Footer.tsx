import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedInIcon, XTwitterIcon, GitHubIcon } from './SocialIcons';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
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
    <footer className="py-14 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200 bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-50 text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 transition-colors">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-charcoal-800/60 dark:border-charcoal-800/60 light:border-charcoal-200">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 flex items-center justify-center font-mono font-bold text-base text-white dark:text-white light:text-charcoal-900">
              {PERSONAL_INFO.monogram}
            </div>
            <div>
              <div className="text-base font-bold text-white dark:text-white light:text-charcoal-900">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs font-mono text-electric">
                Learning. Exploring. Building.
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono" aria-label="Footer Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 hover:text-white dark:hover:text-white light:hover:text-charcoal-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded py-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 hover:bg-charcoal-800 dark:hover:bg-charcoal-800 light:hover:bg-charcoal-200 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 text-xs font-mono text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 hover:text-white dark:hover:text-white light:hover:text-charcoal-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600">
          <div>
            © {currentYear} {PERSONAL_INFO.name} · JECRC University, Jaipur. Built with authentic founder focus.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 hover:text-electric transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 hover:text-electric transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
              aria-label="Twitter Profile"
            >
              <XTwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 hover:text-electric transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
