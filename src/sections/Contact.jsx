import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, PhoneCall, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent to Akash. I will get back to you promptly!',
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Akash</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Let's Discuss <span className="text-gradient-cyan">Opportunities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Interested in frontend engineering, React/GraphQL applications, or data visualization projects? Get in touch!
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                Akash Pandey <Sparkles className="w-5 h-5 text-cyan-400" />
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Frontend Software Engineer at Genetic Web Technologies Pvt. Ltd. Open to exciting engineering roles, full-stack projects, and technical collaborations.
              </p>

              {/* Direct Info Badges */}
              <div className="space-y-4 pt-2">
                <a
                  href="mailto:akashpandey00480@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      akashpandey00480@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+918825279154"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Phone</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      +91 8825279154
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Location</span>
                    <span className="text-sm font-semibold text-white">
                      India (Remote Ready)
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block">Coding & Social Profiles</span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://github.com/akashpandey25"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors text-xs font-semibold flex items-center gap-1.5"
                  >
                    <FaGithub className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akashpandey18/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors text-xs font-semibold flex items-center gap-1.5"
                  >
                    <FaLinkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href="https://leetcode.com/u/akashpandey00480/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors text-xs font-semibold flex items-center gap-1.5"
                  >
                    <SiLeetcode className="w-4 h-4" /> LeetCode
                  </a>
                  <a
                    href="https://www.codechef.com/users/akashpandey18"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-500 hover:border-amber-500/40 transition-colors text-xs font-semibold flex items-center gap-1.5"
                  >
                    <SiCodechef className="w-4 h-4" /> CodeChef
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/profile/akashpandey00480?tab=activity"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors text-xs font-semibold flex items-center gap-1.5"
                  >
                    <SiGeeksforgeeks className="w-4 h-4" /> GFG
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl space-y-6"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              Send a Direct Message <MessageSquare className="w-5 h-5 text-cyan-400" />
            </h3>

            {/* Status Alert Notification */}
            {status.message && (
              <div
                className={`p-4 rounded-2xl border flex items-start gap-3 text-sm ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase font-semibold tracking-wider text-slate-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase font-semibold tracking-wider text-slate-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase font-semibold tracking-wider text-slate-300">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Akash, I would like to discuss..."
                  required
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message to Akash</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;