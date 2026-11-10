import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, ArrowUpRight, AlertCircle, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Video Editing');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!description.trim() || description.trim().length < 10) {
      setErrorMessage('Please provide a brief description of your project (at least 10 characters).');
      return;
    }

    // Prepare mailto link with encoded parameters
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} — ${name}`);
    const body = encodeURIComponent(
      `Hi Anshu,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nProject Overview:\n${description}\n\nLooking forward to collaborating!`
    );

    // Trigger user's default email client
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitSuccess(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-electric/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-electric-bright" />
          <span>CONTACT & INQUIRIES</span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>LET'S CREATE </span>
          <span className="text-gradient-cyan text-electric-glow">
            SOMETHING GREAT
          </span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-text-secondary font-sans leading-relaxed max-w-xl mx-auto">
          Have an upcoming commercial, YouTube channel edit, AI concept, or brand campaign? Let's discuss your timeline and vision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 max-w-6xl mx-auto items-start">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-6 sm:p-7 rounded-3xl liquid-glass-card space-y-5">
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 font-sans leading-relaxed">
                Reach out directly via email, phone, WhatsApp, or LinkedIn for inquiries and commissions.
              </p>
            </div>

            {/* Email Box */}
            <div className="p-4 rounded-2xl liquid-glass flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-electric/15 border border-electric/30 flex items-center justify-center text-electric-bright flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-electric-bright truncate block transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl liquid-glass-pill text-text-muted hover:text-electric-bright hover:border-electric transition-colors flex-shrink-0 active:scale-95"
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-electric-bright" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Box */}
            <div className="p-4 rounded-2xl liquid-glass flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-electric/15 border border-electric/30 flex items-center justify-center text-electric-bright flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-electric-bright truncate block transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={copyPhone}
                className="p-2.5 rounded-xl liquid-glass-pill text-text-muted hover:text-electric-bright hover:border-electric transition-colors flex-shrink-0 active:scale-95"
                aria-label="Copy phone number"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-electric-bright" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Box */}
            <div className="p-4 rounded-2xl liquid-glass flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted flex-shrink-0">
                <MapPin className="w-5 h-5 text-electric-bright" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-mono text-white">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Social Channels Row */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-2xl font-mono text-xs text-white liquid-glass-pill hover:border-electric/50 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-electric-bright" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-text-muted" />
              </a>

              <a
                href={personalInfo.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-2xl font-mono text-xs text-white liquid-glass-pill hover:border-emerald-400/50 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-text-muted" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl liquid-glass-card space-y-5"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-display font-bold text-xl text-white">
                Send a Message
              </h3>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Response within 24h
              </span>
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 flex items-center gap-2 animate-fadeIn">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {submitSuccess && (
              <div className="p-4 rounded-2xl bg-electric/15 border border-electric/40 text-xs font-mono text-electric-bright space-y-1 animate-fadeIn">
                <div className="flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-electric-bright" />
                  <span>Your email client is opening with prefilled details.</span>
                </div>
                <p className="text-text-secondary text-[11px]">
                  You can also write directly to <code className="text-white">{personalInfo.email}</code>.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-white text-sm font-sans placeholder-text-muted focus:outline-none focus:border-electric transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-white text-sm font-sans placeholder-text-muted focus:outline-none focus:border-electric transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                Project Category
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#0C0E14] border border-white/15 text-white text-sm font-mono focus:outline-none focus:border-electric transition-colors"
              >
                <option value="Video Editing">Video Editing (Commercial / Brand / YouTube)</option>
                <option value="Graphic Design">Graphic Design & Thumbnails</option>
                <option value="AI Video Creation">AI Video Creation & Concepting</option>
                <option value="Motion Graphics">Motion Graphics & Visual Effects</option>
                <option value="Social Media Reels">Social Media Reels (9:16 Retention)</option>
                <option value="Other Collaboration">Other Creative Collaboration</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                Project Overview *
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell me about your footage, goals, timeline deadlines, and references..."
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 text-white text-sm font-sans placeholder-text-muted focus:outline-none focus:border-electric transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              data-cursor-text="SEND"
              className="w-full group relative inline-flex items-center justify-center gap-2.5 py-3.5 sm:py-4 rounded-2xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white liquid-glass-btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            >
              <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              <span>SEND PROJECT INQUIRY</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};