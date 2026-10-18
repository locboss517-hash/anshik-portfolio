import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Terminal, BarChart2, BookOpen } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getVisualPlaceholder = (category: string) => {
    switch (category) {
      case 'Startup Concept':
        return (
          <div className="w-full h-36 rounded-lg bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-100 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-300 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-electric" />
                <span>P2P NETWORK BLUEPRINT</span>
              </span>
              <span>JAIPUR CAMPUS</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-200 rounded" />
              <div className="h-2 w-1/2 bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-200 rounded" />
              <div className="h-2 w-2/3 bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-200 rounded" />
            </div>
            <div className="text-[10px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 flex items-center justify-between">
              <span>Status: Architecture Map</span>
              <span className="text-electric font-semibold">Stage 01</span>
            </div>
          </div>
        );

      case 'Business Research':
        return (
          <div className="w-full h-36 rounded-lg bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-100 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-300 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500">
              <span className="flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-electric" />
                <span>UNIT ECONOMICS BREAKDOWN</span>
              </span>
              <span>D2C FMCG</span>
            </div>
            <div className="grid grid-cols-4 gap-2 items-end h-14 pt-2">
              <div className="h-6 bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-300 rounded-t" />
              <div className="h-10 bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-300 rounded-t" />
              <div className="h-8 bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-300 rounded-t" />
              <div className="h-12 bg-electric rounded-t" />
            </div>
            <div className="text-[10px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 flex items-center justify-between">
              <span>Comparative Matrix: 8 Brands</span>
              <span className="text-electric font-semibold">CAC vs LTV</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-36 rounded-lg bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-100 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-300 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-electric" />
                <span>VALIDATION SPRINT SCRIPT</span>
              </span>
              <span>NOTION DB</span>
            </div>
            <div className="space-y-1.5 font-mono text-[11px] text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600">
              <p>&gt; phase1.problem_discovery()</p>
              <p>&gt; phase2.mom_test_interviews(n=15)</p>
              <p>&gt; phase3.scoring_willingness_to_pay()</p>
            </div>
            <div className="text-[10px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 flex items-center justify-between">
              <span>Framework: Lean Validation</span>
              <span className="text-electric font-semibold">14-Day Sprint</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-medium text-electric uppercase tracking-widest mb-3">
            WHAT I'M BUILDING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-charcoal-950 mb-4">
            Ideas deserve to be explored.
          </h2>
          <p className="text-base text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600">
            An evolving collection of projects, experiments, and concepts as I learn about business and technology.
          </p>
        </div>

        {/* 3-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="morphism-card rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-charcoal-500/80 dark:hover:border-charcoal-600 light:hover:border-charcoal-400 group"
            >
              <div>
                {/* Visual Placeholder Diagram */}
                <div className="mb-5">
                  {getVisualPlaceholder(project.category)}
                </div>

                {/* Meta Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-electric">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 px-2 py-0.5 rounded bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200">
                    {project.stage}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white dark:text-white light:text-charcoal-950 mb-2 tracking-tight group-hover:text-electric transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tools Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-mono px-2 py-1 rounded bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-[11px] font-mono px-1.5 py-1 text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button: View Concept */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 text-white dark:text-white light:text-charcoal-900 hover:bg-electric hover:text-white dark:hover:bg-electric dark:hover:text-white light:hover:bg-electric light:hover:text-white border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                  aria-label={`View concept details for ${project.title}`}
                >
                  <span>Explore Concept Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notice: Clearly Honest Placeholder Standard & Coming Soon Banner */}
        <div className="p-6 rounded-xl bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-50 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 flex items-center justify-center text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700">
              <BookOpen className="w-4 h-4 text-electric" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white dark:text-white light:text-charcoal-900">
                More projects coming soon
              </h4>
              <p className="text-xs text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600">
                Currently formulating a campus consumer survey and validating business hypotheses at JECRC University.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 px-3 py-1.5 rounded bg-charcoal-900/60 dark:bg-charcoal-900/60 light:bg-white border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200 shrink-0">
            Academic Year 2026 – 2027 Pipeline
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
