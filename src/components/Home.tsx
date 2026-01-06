import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Award, Briefcase, Code } from 'lucide-react';

export function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const achievements = [
    { icon: Award, label: 'Dean\'s List', value: '4x', color: 'from-yellow-500 to-orange-500' },
    { icon: Briefcase, label: 'Projects', value: '15+', color: 'from-blue-500 to-cyan-500' },
    { icon: Code, label: 'Technologies', value: '20+', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 100 }}
          className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
          transition={{ type: 'spring', damping: 50, stiffness: 100 }}
          className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-cyan-500/25 rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-400/20 text-blue-300 mb-8 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Open to Opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="mb-6 leading-tight">
                <span className="block text-slate-400 text-2xl md:text-3xl font-normal mb-3">
                  Hello, I'm
                </span>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  Your Name
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                  HCI Student
                </span>
                {' '}&{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                  UI/UX Designer
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                Crafting intuitive digital experiences through human-centered design 
                and cutting-edge technology. Passionate about creating interfaces that 
                users love.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white rounded-xl font-semibold flex items-center gap-2 shadow-2xl shadow-blue-500/30 transition-all relative overflow-hidden"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur-xl text-white rounded-xl font-semibold border border-slate-700/50 hover:border-blue-400/50 transition-all hover:bg-slate-800/70"
                >
                  Let's Connect
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: 'https://github.com/yourusername' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
                  { icon: Mail, href: 'mailto:your.email@example.com' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400/50 hover:bg-slate-800/70 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>

              <div className="w-px h-8 bg-slate-700/50" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-slate-800/70 transition-all"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Resume</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/20" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full"
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/10" />
              </motion.div>

              {/* Profile Card */}
              <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 backdrop-blur-2xl rounded-3xl p-1 border border-white/10 shadow-2xl">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 overflow-hidden shadow-2xl shadow-blue-500/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    <div className="w-full h-full flex items-center justify-center text-white text-7xl font-bold">
                      YN
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {achievements.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-slate-400">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-2xl p-5 shadow-2xl shadow-blue-500/50 border border-blue-400/30"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-xl border border-green-400/30 rounded-2xl px-6 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white font-semibold">Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}