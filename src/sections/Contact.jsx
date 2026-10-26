import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  Phone,
  MapPin,
  Send,
  MessageSquare,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'akashpandey00480@gmail.com';

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        // Fallback for non-secure contexts or older browsers
        const textArea = document.createElement('textarea');
        textArea.value = emailAddress;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleDirectEmailSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject || 'Collaboration Inquiry · Akash Pandey'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with deliberate line breaks */}
        <div className="border-t border-white/[0.12] pt-12 pb-16">
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A78BFA] flex items-center gap-2">
              <span>05 // INITIATE DIALOGUE</span>
            </span>

            <h2 className="font-display text-[clamp(2.1rem,4.5vw,4.5rem)] font-bold text-[#F5F5F7] tracking-tight leading-[1.04]">
              <span className="block">HAVE A GOOD IDEA?</span>
              <span className="block text-gradient-accent">LET'S BUILD IT.</span>
            </h2>

            <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl font-normal leading-relaxed pt-2">
              Have a project in mind, an interesting opportunity, or an idea worth exploring? I'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Connection Channels (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Primary Interactive Email Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#101016] space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                <span className="uppercase tracking-widest">// PRIMARY CHANNEL</span>
                <span className="text-emerald-400">Response within 24h</span>
              </div>

              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#A1A1AA] block mb-1">
                  DIRECT EMAIL
                </span>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-display text-xl sm:text-2xl font-bold text-white hover:text-[#A78BFA] transition-colors break-all"
                  >
                    {emailAddress}
                  </a>

                  {/* Copy Button with visual confirmation */}
                  <button
                    onClick={copyToClipboard}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                      copied
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/10'
                    }`}
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#A78BFA]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono">
                <div>
                  <span className="text-[#A1A1AA] uppercase tracking-wider block mb-1">TELEPHONE</span>
                  <a
                    href="tel:+918825279154"
                    className="text-white hover:text-[#A78BFA] transition-colors flex items-center gap-1.5 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>+91 8825279154</span>
                  </a>
                </div>
                <div>
                  <span className="text-[#A1A1AA] uppercase tracking-wider block mb-1">LOCATION & AVAILABILITY</span>
                  <span className="text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
                    <span>Kolkata, IN · Remote Worldwide</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Social & Coding Network Hub */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA] block">
                // NETWORK & REPOSITORIES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/akashpandey18/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-white/[0.08] bg-[#101016]/80 hover:border-white/20 hover:bg-[#101016] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="w-4 h-4 text-[#60A5FA]" />
                    <span className="text-sm font-semibold text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="https://github.com/akashpandey25"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-white/[0.08] bg-[#101016]/80 hover:border-white/20 hover:bg-[#101016] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="https://leetcode.com/u/akashpandey00480/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-white/[0.08] bg-[#101016]/80 hover:border-white/20 hover:bg-[#101016] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <SiLeetcode className="w-4 h-4 text-[#A78BFA]" />
                    <span className="text-sm font-semibold text-white">LeetCode</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="https://www.geeksforgeeks.org/profile/akashpandey00480?tab=activity"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-white/[0.08] bg-[#101016]/80 hover:border-white/20 hover:bg-[#101016] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <SiGeeksforgeeks className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-white">GeeksforGeeks</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Dispatcher (5 cols) */}
          <div className="lg:col-span-5">
            <form
              onSubmit={handleDirectEmailSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.12] bg-[#101016] space-y-5"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A78BFA]">
                  // QUICK DISPATCH
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#A1A1AA]">
                  Composing opens your default mail client with guaranteed end-to-end delivery to Akash.
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] block"
                >
                  Subject / Scope
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Frontend Engineering Role / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#07070A] text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#A78BFA] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your product, timeline, or engineering needs..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#07070A] text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#A78BFA] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-white text-[#07070A] font-semibold text-sm hover:bg-[#F5F5F7] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 focus:outline-none"
              >
                <span>Dispatch Email to Akash</span>
                <Send className="w-4 h-4 text-[#07070A]" />
              </button>

              <div className="text-[11px] font-mono text-[#A1A1AA]/60 text-center pt-1">
                Zero spam. Direct inbox communication.
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;