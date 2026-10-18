import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'morphism-nav shadow-subtle-dark'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-lg p-1"
          aria-label="Anshik Gandhi Home"
        >
          <div className="w-9 h-9 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center font-mono font-bold text-sm tracking-wider text-white group-hover:border-electric transition-colors">
            {PERSONAL_INFO.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight text-white leading-none">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-charcoal-400 mt-1">
              BBA · Founder Mindset
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric relative ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-charcoal-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-electric rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions: Connect CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-charcoal-800 text-white hover:bg-electric border border-charcoal-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="w-9 h-9 rounded-lg bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-charcoal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden morphism-nav border-b border-charcoal-700 px-4 py-5 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-charcoal-800 text-white font-semibold'
                      : 'text-charcoal-300 hover:bg-charcoal-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-electric" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-charcoal-800">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-electric text-white hover:bg-electric-hover transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
