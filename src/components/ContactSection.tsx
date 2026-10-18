import React, { useState } from 'react';
import { Mail, Instagram, Youtube, Send, Copy, Check, MessageSquare, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'VFX & Motion Graphics',
    budgetRange: '₹5,000 - ₹15,000',
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const projectTypes = [
    'VFX & Compositing',
    'Short Form (Reels/Shorts)',
    'Commercial Video Edit',
    'Motion Graphics & Title',
    'Color Grading Pass'
  ];

  const budgetRanges = [
    'Under ₹5,000',
    '₹5,000 - ₹15,000',
    '₹15,000 - ₹30,000',
    '₹30,000+'
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      alert('Please fill in your name, email, and project details.');
      return;
    }

    // Opens user's default email client with prepopulated inquiry
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Budget Range: ${formData.budgetRange}\n\n` +
      `Project Details:\n${formData.description}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus('submitted');
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-accent-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>START A COLLABORATION</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          HAVE A PROJECT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
            IN MIND?
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
          Let's turn your ideas into visuals that stand out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-white">
              Get in Touch Directly
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Whether you need high-tempo social retention edits, complex VFX sequences, or cinematic commercial post-production, I'm ready to bring your vision to life.
            </p>

            {/* Copyable Email & Phone Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-md space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-xs sm:text-sm text-white font-medium truncate">
                    {personalInfo.email}
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-accent-cyan text-[11px] font-mono transition-colors border border-white/5"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Done</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-md space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  Phone / WhatsApp
                </span>
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-xs sm:text-sm text-white font-medium">
                    {personalInfo.phone}
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-accent-cyan text-[11px] font-mono transition-colors border border-white/5"
                  >
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons: Email, WhatsApp, Instagram, Google Sites */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                Connect Directly
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900/60 border border-white/5 hover:border-accent-cyan text-neutral-300 hover:text-white transition-all text-xs font-mono"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent-cyan" />
                    <span>Send Email</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>

                {personalInfo.whatsAppUrl && (
                  <a
                    href={personalInfo.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900/60 border border-white/5 hover:border-emerald-500 text-neutral-300 hover:text-white transition-all text-xs font-mono"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Chat</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                )}

                <a
                  href={personalInfo.portfolioWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900/60 border border-white/5 hover:border-accent-cyan text-neutral-300 hover:text-white transition-all text-xs font-mono"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent-cyan" />
                    <span>Anshu's Website</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900/60 border border-white/5 text-neutral-300 text-xs font-mono">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                    <span>{personalInfo.location}</span>
                  </span>
                  <span className="text-[10px] text-neutral-500">India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-neutral-300 font-mono">
            <span className="text-emerald-400 font-bold block mb-1">● Current Turnaround Status</span>
            Accepting select commercial & creative projects. Average initial cut delivered in 48-72 hours.
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6"
          >
            {/* Name & Email inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Hunter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-accent-cyan text-sm transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-accent-cyan text-sm transition-colors"
                />
              </div>
            </div>

            {/* Project Type Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Project Category
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      formData.projectType === type
                        ? 'bg-accent-cyan text-black font-bold'
                        : 'bg-dark-950 text-neutral-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Estimated Budget Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData({ ...formData, budgetRange: range })}
                    className={`py-2 px-3 text-center rounded-lg text-xs font-mono transition-all ${
                      formData.budgetRange === range
                        ? 'bg-accent-violet text-white font-bold border border-accent-violet'
                        : 'bg-dark-950 text-neutral-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Message / Description */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Project Details / Footage Specs *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Briefly describe your footage, desired tone, timeline, and reference links..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-accent-cyan text-sm transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-accent-cyan via-white to-accent-violet hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>SEND PROJECT INQUIRY</span>
            </button>

            {status === 'submitted' && (
              <p className="text-center text-xs font-mono text-emerald-400 animate-fadeIn">
                ✓ Opening your email client to send your inquiry. Talk soon!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
