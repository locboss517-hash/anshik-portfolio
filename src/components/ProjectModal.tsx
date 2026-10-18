import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Lightbulb, Wrench, ShieldAlert } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Body */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-charcoal-900 dark:bg-charcoal-900 light:bg-white border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 p-6 sm:p-8 shadow-2xl z-10 text-left">
        
        {/* Top bar with category & close */}
        <div className="flex items-center justify-between pb-4 border-b border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-100 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-200 text-xs font-mono text-electric font-semibold">
              {project.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600 border border-charcoal-700/60 dark:border-charcoal-700/60 light:border-charcoal-200">
              {project.stage}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-100 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 flex items-center justify-center text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-700 hover:text-white dark:hover:text-white light:hover:text-charcoal-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Title & Overview */}
        <div className="my-6">
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-charcoal-950 tracking-tight mb-3">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 leading-relaxed">
            {project.detailedOverview}
          </p>
        </div>

        {/* Problem & Solution Breakdown */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-50 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 mb-2">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <span>THE IDENTIFIED PROBLEM</span>
            </div>
            <p className="text-sm text-charcoal-200 dark:text-charcoal-200 light:text-charcoal-800">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-50 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 mb-2">
              <Lightbulb className="w-4 h-4 text-electric" />
              <span>PROPOSED CONCEPT / HYPOTHESIS</span>
            </div>
            <p className="text-sm text-charcoal-200 dark:text-charcoal-200 light:text-charcoal-800">
              {project.proposedSolution}
            </p>
          </div>
        </div>

        {/* Tools and Key Takeaway */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-600 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>METHODOLOGY & TOOLS UTILIZED</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-100 text-charcoal-200 dark:text-charcoal-200 light:text-charcoal-800 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-200"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-electric/10 border border-electric/30 text-xs text-charcoal-200 dark:text-charcoal-200 light:text-charcoal-800 font-mono">
            <CheckCircle2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
            <span><strong>Learning Takeaway:</strong> {project.keyTakeaway}</span>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200">
          <div className="text-xs text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 font-mono">
            Sample concept study · JECRC University
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-electric text-white hover:bg-electric-hover transition-colors w-full sm:w-auto"
              >
                <span>Visit Project URL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg text-sm font-medium bg-charcoal-800 dark:bg-charcoal-800 light:bg-charcoal-200 text-white dark:text-white light:text-charcoal-900 hover:bg-charcoal-700 transition-colors w-full sm:w-auto"
              >
                Close Details
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
