import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Layers, Zap, Database, Smartphone, Globe, Award, Brain, Rocket } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Canva', level: 85 },
        { name: 'User Research', level: 90 },
        { name: 'Wireframing', level: 92 },
        { name: 'Prototyping', level: 88 },
        { name: 'Design Systems', level: 85 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'JavaScript', level: 92 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'MongoDB', level: 82 },
        { name: 'Firebase', level: 85 },
        { name: 'REST APIs', level: 88 },
        { name: 'SQL', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'C', level: 80 },
        { name: 'Oracle Data Modeler', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Layers,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Git & GitHub', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 65 },
        { name: 'Jira', level: 40 },
      ],
    },
  ];

  const softSkills = [
    { name: 'Communication', icon: '💬', description: 'Clear and effective communication with team members and stakeholders', color: 'from-blue-500 to-cyan-500' },
    { name: 'Problem Solving', icon: '🧩', description: 'Analytical thinking and creative solutions to complex challenges', color: 'from-purple-500 to-pink-500' },
    { name: 'Teamwork', icon: '🤝', description: 'Collaborative mindset and ability to work in diverse teams', color: 'from-green-500 to-emerald-500' },
    { name: 'Time Management', icon: '⏰', description: 'Efficient prioritization and deadline management', color: 'from-yellow-500 to-orange-500' },
    { name: 'Adaptability', icon: '🔄', description: 'Quick learner, embracing new technologies and methodologies', color: 'from-red-500 to-rose-500' },
    { name: 'Critical Thinking', icon: '🎯', description: 'Data-driven decision making and objective analysis', color: 'from-indigo-500 to-blue-500' },
  ];

  const expertise = [
    { label: 'Years Experience', value: '3+', icon: Rocket },
    { label: 'Technologies', value: '20+', icon: Code },
    { label: 'Projects Completed', value: '10+', icon: Award },
    { label: 'Design Hours', value: '500+', icon: Brain },
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
              <Zap className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </motion.div>

        {/* Expertise Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {expertise.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden group"
              >
                {/* Background glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl text-white font-semibold">{category.title}</h2>
                </div>

                <div className="space-y-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-slate-900/50 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.7 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 1, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            <span className="text-white">Professional </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />

                  <div className="text-5xl mb-5 group-hover:scale-110 transition-transform inline-block">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl mb-3 text-white font-semibold">{skill.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning & Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-24"
        >
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-3xl mb-6 text-white font-semibold">Continuous Learning</h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                I'm constantly expanding my skill set through online courses, hands-on projects, and staying
                up-to-date with the latest industry trends. My passion for learning drives me to explore
                new technologies and refine my existing expertise.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {['HCI Principles', 'Accessibility', 'Responsive Design', 'Agile Methodology', 'Design Thinking', 'User Psychology'].map((topic, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="px-5 py-2.5 bg-slate-900/50 border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:bg-slate-800/70 hover:border-blue-400/30 transition-all"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
