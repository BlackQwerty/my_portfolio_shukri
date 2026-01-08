import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Trophy, Star, Calendar, Sparkles } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Science (Software Development)',
      institution: 'Universiti Teknikal Malaysia Melaka (UTeM)',
      period: '2022 - Present',
      cgpa: '3.6',
      status: 'In Progress',
      achievements: [
        'Dean\'s List - 3 consecutive semesters',
        'Tutor for FTMK Rakan Akademik',
        'Participated in Worldskills Malaysia (Mobile App Development)',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      degree: 'Foundation in Physical Science',
      institution: 'University of Malaya',
      period: '2021 - 2022',
      cgpa: '3.78',
      status: 'Completed',
      achievements: [
        'Excellent achievement in all subjects',
        'Participated in Tech Events',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'SPM (Sijil Pelajaran Malaysia)',
      institution: 'SMKA Sultan Muhammad',
      period: '2017 - 2021',
      cgpa: '10 A',
      status: 'Completed',
      achievements: [
        'Straight A\'s in Science subjects',
        'Deputy Head Prefect',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const certifications = [
    {
      title: 'Oracle Database Professional Certificate',
      issuer: 'Oracle',
      date: '2025',
      icon: Award,
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2023',
      icon: BookOpen,
    },
    {
      title: 'JavaScript Algorithms',
      issuer: 'freeCodeCamp',
      date: '2023',
      icon: Trophy,
    },
    {
      title: 'Google Ai Certified: Foundational',
      issuer: 'Google',
      date: '2025',
      icon: Award,
    },
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
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My academic journey and continuous pursuit of knowledge
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-24">
          {/* Timeline line with gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full" />

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot with glow */}
                <div className="absolute left-8 md:left-1/2 -ml-0.5 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-5 h-5 rounded-full bg-gradient-to-r ${edu.color} shadow-lg`}
                  />
                </div>

                {/* Content card */}
                <div className="ml-20 md:ml-0 md:w-[calc(50%-3rem)] flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden group"
                  >
                    {/* Background glow */}
                    <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />

                    {/* Status badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold mb-5 bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                      <Calendar className="w-4 h-4" />
                      {edu.status}
                    </div>

                    <h3 className="text-2xl mb-3 text-white font-semibold">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2 font-medium">
                      <GraduationCap className="w-5 h-5" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="text-slate-400 mb-6 font-medium">{edu.period}</div>

                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300 font-medium">CGPA/Result:</span>
                        <span className={`text-3xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.cgpa}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-3 text-slate-400"
                          >
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            <span className="text-white">Certifications & </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity" />

                    <div className="flex items-start gap-4 relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg mb-2 text-white group-hover:text-blue-400 transition-colors font-semibold">
                          {cert.title}
                        </h3>
                        <div className="text-sm text-slate-400 mb-2">{cert.issuer}</div>
                        <div className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full inline-block font-semibold border border-blue-500/30">
                          {cert.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-3xl mb-6 text-white font-semibold">My Learning Philosophy</h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                "Education is not just about grades—it's about growth, curiosity, and the relentless pursuit
                of knowledge. Every course, every project, every challenge is an opportunity to become better
                than yesterday."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}