import { motion } from 'framer-motion';
import { SiInstagram, SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "varunsahukar9798@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      icon: SiLinkedin,
      link: 'https://www.linkedin.com/in/varunsahukar9798/',
      handle: 'Varun Sahukar',
      color: 'hover:text-blue-500',
      glow: 'group-hover:shadow-blue-500/20'
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
        <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
          LET'S CONNECT.
        </h2>
        <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed italic">
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
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative h-full flex flex-col justify-between p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-2xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                <SiGmail size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Direct Message</h3>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">Have a specific proposal or just want to say hi? My inbox is always open.</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <a 
                href={`mailto:${email}`}
                className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold text-center hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
              >
                Send Email
              </a>
              <button 
                onClick={handleCopy}
                className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
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
          <div className="h-full p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-2xl flex flex-col justify-between border-t-blue-500/30">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <div>
                    <p className="text-sm font-bold text-white/90">Availability</p>
                    <p className="text-xs text-white/40">Open for new projects & full-time roles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                  <div>
                    <p className="text-sm font-bold text-white/90">Location</p>
                    <p className="text-xs text-white/40">Bengaluru, India (Available for Remote)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-purple-500" />
                  <div>
                    <p className="text-sm font-bold text-white/90">Response Time</p>
                    <p className="text-xs text-white/40">Usually within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 mt-8 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold mb-2">Current Focus</p>
              <p className="text-sm text-white/60 font-medium">Building scalable web architectures & immersive UI experiences.</p>
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
          <div className="h-full p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Social Presence</h3>
              <p className="text-white/40 text-sm mb-8 italic">Let's build a network.</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {socials.map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-black/40 text-white/60 ${social.color} transition-colors shadow-lg ${social.glow}`}>
                      <social.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/80 group-hover:text-white transition-colors">
                        {social.name}
                      </p>
                      <p className="text-[10px] text-white/30 font-mono">{social.handle}</p>
                    </div>
                  </div>
                  <div className="text-white/10 group-hover:text-white/40 transition-colors transform group-hover:translate-x-1 duration-300">
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
