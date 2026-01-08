import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb, Users, Heart, Target, Zap, Rocket } from 'lucide-react';
import holdbookPic from '../photos/holdbook_pp.jpeg';

export function About() {
  const qualities = [
    {
      icon: Code,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant solutions through code and design.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Creative Designer',
      description: 'Passionate about creating beautiful, intuitive interfaces that users love to interact with.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'Quick Learner',
      description: 'Always eager to learn new technologies and methodologies to stay ahead in the field.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Excellent collaboration skills with experience working in diverse, cross-functional teams.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Deep commitment to understanding user needs and creating experiences that truly serve them.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Target,
      title: 'Detail-Oriented',
      description: 'Meticulous attention to detail ensures pixel-perfect implementations and quality work.',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const values = [
    { icon: '🎯', title: 'Excellence', description: 'Striving for the highest quality in every project' },
    { icon: '🚀', title: 'Innovation', description: 'Pushing boundaries with creative solutions' },
    { icon: '🤝', title: 'Collaboration', description: 'Building together for better outcomes' },
    { icon: '💡', title: 'Growth', description: 'Continuous learning and improvement' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto mt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50">
              <Users className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Discover the story, passion, and vision behind my journey in design and technology
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 border border-white/10 overflow-hidden backdrop-blur-xl relative group">
                <img
                  src={holdbookPic}
                  alt="Ahmad Shukri"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Metrics */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl p-6 shadow-2xl shadow-blue-500/50 border border-blue-400/30"
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">3.6+</div>
                  <div className="text-xs opacity-90">CGPA</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 rounded-2xl p-6 shadow-2xl shadow-purple-500/50 border border-purple-400/30"
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-xs opacity-90">Study Hours</div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl text-white mb-6">My Journey</h2>
              <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
                <p>
                  Hello! I'm a passionate <span className="text-blue-400 font-semibold">HCI student at UTeM</span>,
                  dedicated to bridging the gap between technology and human experience. My journey began with
                  a simple question: <span className="italic text-cyan-300">"How can we make technology more intuitive and delightful?"</span>
                </p>
                <p>
                  Throughout my academic journey, I've immersed myself in understanding user behavior,
                  design principles, and cutting-edge technologies. Every project I undertake is driven
                  by the belief that <span className="text-purple-400 font-semibold">good design isn't just about aesthetics</span>—it's
                  about creating meaningful connections between users and technology.
                </p>
                <p>
                  When I'm not designing or coding, you'll find me exploring new design trends,
                  contributing to open-source projects, or sketching interface ideas. I believe in
                  <span className="text-green-400 font-semibold"> continuous learning</span> and pushing the boundaries of what's possible.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl text-center mb-12">
            <span className="text-white">Core </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Values
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl text-white mb-2 font-semibold">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Qualities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            <span className="text-white">Personal </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Qualities
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group h-full"
                >
                  <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${quality.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />

                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${quality.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl mb-3 text-white font-semibold">{quality.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{quality.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-24"
        >
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="text-6xl mb-6">💭</div>
              <h3 className="text-2xl md:text-3xl mb-6 text-white font-semibold">Design Philosophy</h3>
              <p className="text-xl text-slate-300 leading-relaxed italic">
                "Great design is invisible. It's the art of making complex things feel simple,
                creating experiences so intuitive that users don't even notice the interface—
                they just accomplish their goals effortlessly."
              </p>
              <div className="mt-6 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}