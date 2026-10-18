import React, { useState } from 'react';
import { Mail, Copy, Check, Send, AlertCircle, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, XTwitterIcon, GitHubIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    topic: 'Startup Collaboration',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'draft-ready'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or organization.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'An email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a brief message or topic description.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Real client mailto generation
    const subject = encodeURIComponent(`[${formData.topic}] From ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Anshik,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nContact: ${formData.email}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    // Open user's default email client with verified inputs
    window.location.href = mailtoUrl;
    setSubmittedStatus('draft-ready');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-medium text-electric uppercase tracking-widest mb-3">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-charcoal-950 mb-4">
            Have an idea? Let's talk.
          </h2>
          <p className="text-base text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600 leading-relaxed">
            I'm always interested in learning from new perspectives, exchanging ideas, and connecting with people who enjoy building things.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Email Card with One-Click Copy */}
            <div className="morphism-card rounded-xl p-6">
              <div className="text-xs font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 mb-2">
                DIRECT INBOX
              </div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-sm sm:text-base font-semibold text-white dark:text-white light:text-charcoal-900 truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-charcoal-900 dark:bg-charcoal-900 light:bg-charcoal-100 hover:bg-charcoal-800 dark:hover:bg-charcoal-800 light:hover:bg-charcoal-200 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="mb-4 text-xs font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-600 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}

              {/* Say Hello Mailto Button */}
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Hello%20Anshik%20%E2%80%94%20Connection`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold bg-electric text-white hover:bg-electric-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              >
                <Mail className="w-4 h-4" />
                <span>Say Hello via Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Network Profiles */}
            <div className="morphism-card rounded-xl p-6">
              <div className="text-xs font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 mb-4">
                PROFESSIONAL PROFILES
              </div>
              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-100 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200 hover:border-charcoal-600 dark:hover:border-charcoal-600 light:hover:border-charcoal-300 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                >
                  <div className="flex items-center gap-3">
                    <LinkedInIcon className="w-4 h-4 text-electric" />
                    <div>
                      <div className="text-sm font-semibold text-white dark:text-white light:text-charcoal-900">
                        LinkedIn
                      </div>
                      <div className="text-xs text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 font-mono">
                        anshik-gandhi
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-electric transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-100 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200 hover:border-charcoal-600 dark:hover:border-charcoal-600 light:hover:border-charcoal-300 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                >
                  <div className="flex items-center gap-3">
                    <XTwitterIcon className="w-4 h-4 text-electric" />
                    <div>
                      <div className="text-sm font-semibold text-white dark:text-white light:text-charcoal-900">
                        X (Twitter)
                      </div>
                      <div className="text-xs text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 font-mono">
                        @anshik_gandhi
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-electric transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-100 border border-charcoal-800 dark:border-charcoal-800 light:border-charcoal-200 hover:border-charcoal-600 dark:hover:border-charcoal-600 light:hover:border-charcoal-300 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                >
                  <div className="flex items-center gap-3">
                    <GitHubIcon className="w-4 h-4 text-electric" />
                    <div>
                      <div className="text-sm font-semibold text-white dark:text-white light:text-charcoal-900">
                        GitHub
                      </div>
                      <div className="text-xs text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500 font-mono">
                        anshik-gandhi
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-electric transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="morphism-card rounded-xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal-800/80 dark:border-charcoal-800/80 light:border-charcoal-200">
                <span className="text-xs font-mono font-semibold text-white dark:text-white light:text-charcoal-900">
                  SEND A DIRECT MESSAGE
                </span>
                <span className="text-[11px] font-mono text-charcoal-400 dark:text-charcoal-400 light:text-charcoal-500">
                  Opens client dispatch
                </span>
              </div>

              {submittedStatus === 'draft-ready' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono space-y-1">
                  <div className="flex items-center gap-2 font-bold">
                    <Check className="w-4 h-4" />
                    <span>Email client opened with your message draft!</span>
                  </div>
                  <p className="text-[11px] text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600">
                    If your email app didn't launch automatically, you can copy the email above directly or click "Say Hello via Email".
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 mb-1.5">
                    Your Name / Organization <span className="text-electric">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Alex Sharma"
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-50 text-white dark:text-white light:text-charcoal-900 border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric ${
                      errors.name
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 hover:border-charcoal-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 mb-1.5">
                    Your Email Address <span className="text-electric">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-50 text-white dark:text-white light:text-charcoal-900 border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric ${
                      errors.email
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 hover:border-charcoal-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Topic Selector */}
                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-mono font-medium text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 mb-1.5">
                    Discussion Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg text-sm bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-50 text-white dark:text-white light:text-charcoal-900 border border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 hover:border-charcoal-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                  >
                    <option value="Startup Collaboration">Startup Collaboration / Brainstorming</option>
                    <option value="Mentorship & Learning">Mentorship / Advice for Student Founder</option>
                    <option value="Case Study Discussion">Business Strategy / Case Study Exchange</option>
                    <option value="General Conversation">Casual Connection / Say Hello</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-700 mb-1.5">
                    Your Message <span className="text-electric">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me about what you're working on, an interesting idea, or feedback..."
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-charcoal-950 dark:bg-charcoal-950 light:bg-charcoal-50 text-white dark:text-white light:text-charcoal-900 border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric resize-y ${
                      errors.message
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-charcoal-700 dark:border-charcoal-700 light:border-charcoal-300 hover:border-charcoal-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-semibold bg-electric text-white hover:bg-electric-hover transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Mail Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
