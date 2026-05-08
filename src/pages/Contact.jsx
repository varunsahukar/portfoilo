import { motion } from 'framer-motion';
import { SiInstagram, SiGithub, SiGmail } from 'react-icons/si';
import { useState } from 'react';

export default function Contact({ isDark }) {
  const [copied, setCopied] = useState(false);
  const email = "varunsahukar9798@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SiLinkedinCustom = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const socials = [
    {
      name: 'Instagram',
      icon: SiInstagram,
      link: 'https://www.instagram.com/varun_sahukar19?igsh=MW1uZWR6dDd2cWM5Mg%3D%3D&utm_source=qr',
      handle: '@varun_sahukar19',
      color: 'hover:text-pink-500',
      glow: 'group-hover:shadow-pink-500/20'
    },
    {
      name: 'GitHub',
      icon: SiGithub,
      link: 'https://github.com/varunsahukar',
      handle: 'varunsahukar',
      color: 'hover:text-white',
      glow: 'group-hover:shadow-white/20'
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedinCustom,
      link: 'https://www.linkedin.com/in/varunsahukar9798/',
      handle: 'Varun Sahukar',
      color: 'hover:text-[#e8b72e]',
      glow: 'group-hover:shadow-[0_0_20px_rgba(232,183,46,0.2)]'
    }
  ];

  return (
    <section id="contact" className="relative py-32 px-4 max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className={`text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-gradient-to-b ${isDark ? 'from-white to-white/20' : 'from-black to-black/20'} bg-clip-text text-transparent`}>
          LET'S CONNECT.
        </h2>
        <p className={`text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed italic ${isDark ? 'text-white/50' : 'text-black/50'}`}>
          "The best way to predict the future is to invent it."
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Email Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative md:col-span-1"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e8b72e] to-[#e8b72e] rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className={`relative h-full flex flex-col justify-between p-8 rounded-3xl border backdrop-blur-2xl ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/40 border-black/10'}`}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#e8b72e]/10 flex items-center justify-center mb-6 text-[#e8b72e]">
                <SiGmail size={24} />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Direct Message</h3>
              <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-white/40' : 'text-black/40'}`}>Have a specific proposal or just want to say hi? My inbox is always open.</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <a 
                href={`mailto:${email}`}
                className="w-full py-4 rounded-2xl bg-[#e8b72e] text-black font-bold text-center hover:bg-[#f0c955] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[0_0_15px_rgba(232,183,46,0.2)]"
              >
                Send Email
              </a>
              <button 
                onClick={handleCopy}
                className={`w-full py-4 rounded-2xl border font-semibold hover: transition-all flex items-center justify-center gap-2 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-black/5 border-black/10 text-black hover:bg-black/10'}`}
              >
                {copied ? 'Copied!' : 'Copy Address'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Availability Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative md:col-span-1"
        >
          <div className={`h-full p-8 rounded-3xl border backdrop-blur-2xl flex flex-col justify-between ${isDark ? 'bg-black/40 border-white/10 border-t-[rgba(232,183,46,0.3)]' : 'bg-white/40 border-black/10 border-t-[rgba(232,183,46,0.3)]'}`}>
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Quick Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <div>
                    <p className={`text-sm font-bold ${isDark ? 'text-white/90' : 'text-black/90'}`}>Availability</p>
                    <p className={`text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>Open for new projects & internships.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#e8b72e]" />
                  <div>
                    <p className={`text-sm font-bold ${isDark ? 'text-white/90' : 'text-black/90'}`}>Location</p>
                    <p className={`text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>Bengaluru, India (Available for Remote)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-purple-500" />
                  <div>
                    <p className={`text-sm font-bold ${isDark ? 'text-white/90' : 'text-black/90'}`}>Response Time</p>
                    <p className={`text-xs ${isDark ? 'text-white/40' : 'text-black/40'}`}>Usually within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`pt-8 mt-8 border-t ${isDark ? 'border-white/5' : 'border-black/5'}`}>
              <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-white/20' : 'text-black/20'}`}>Current Focus</p>
              <p className={`text-sm font-medium ${isDark ? 'text-white/60' : 'text-black/60'}`}>Building scalable web architectures & immersive UI experiences.</p>
            </div>
          </div>
        </motion.div>

        {/* Socials Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative md:col-span-1"
        >
          <div className={`h-full p-8 rounded-3xl border backdrop-blur-2xl flex flex-col justify-between ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/40 border-black/10'}`}>
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Social Presence</h3>
              <p className={`text-sm mb-8 italic ${isDark ? 'text-white/40' : 'text-black/40'}`}>Let's build a network.</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {socials.map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-4 rounded-2xl border hover: transition-all ${isDark ? 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10' : 'bg-black/5 border-black/5 hover:border-black/20 hover:bg-black/10'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl text-white/60 ${social.color} transition-colors shadow-lg ${social.glow} ${isDark ? 'bg-black/40' : 'bg-white/40'}`}>
                      <social.icon size={20} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold transition-colors group-hover: ${isDark ? 'text-white/80 group-hover:text-white' : 'text-black/80 group-hover:text-black'}`}>
                        {social.name}
                      </p>
                      <p className={`text-[10px] font-mono ${isDark ? 'text-white/30' : 'text-black/30'}`}>{social.handle}</p>
                    </div>
                  </div>
                  <div className={`transition-colors transform group-hover:translate-x-1 duration-300 ${isDark ? 'text-white/10 group-hover:text-white/40' : 'text-black/10 group-hover:text-black/40'}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
