import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Figma, Eye, Sparkles, Code, Palette, Filter } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'uiux', label: 'UI/UX Design', icon: Palette },
    { id: 'web', label: 'Web Development', icon: Code },
    { id: 'mobile', label: 'Mobile Apps', icon: null },
    { id: 'research', label: 'Research', icon: null },
  ];

  const projects = [
    {
      title: 'Smart Campus Navigation App',
      category: 'mobile',
      description: 'An intuitive mobile app designed to help UTeM students navigate the campus with AR features and real-time location services.',
      image: '📱',
      tags: ['Figma', 'User Research', 'Prototyping', 'Mobile UI'],
      color: 'from-blue-500 to-cyan-500',
      links: {
        demo: '#',
        github: '#',
        figma: '#',
      },
      featured: true,
    },
    {
      title: 'E-Commerce Redesign',
      category: 'uiux',
      description: 'Complete UX overhaul of an e-commerce platform, improving conversion rate by 45% through user-centered design principles.',
      image: '🛒',
      tags: ['UX Research', 'Wireframing', 'A/B Testing', 'Figma'],
      color: 'from-purple-500 to-pink-500',
      links: {
        demo: '#',
        figma: '#',
      },
      featured: true,
    },
    {
      title: 'Task Management Dashboard',
      category: 'web',
      description: 'A modern, responsive task management application built with React and featuring real-time collaboration.',
      image: '📊',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      color: 'from-green-500 to-emerald-500',
      links: {
        demo: '#',
        github: '#',
      },
      featured: false,
    },
    {
      title: 'Accessibility Study: Banking Apps',
      category: 'research',
      description: 'Research project analyzing accessibility features in Malaysian banking apps with recommendations for improvement.',
      image: '🔍',
      tags: ['User Research', 'Accessibility', 'Heuristic Evaluation'],
      color: 'from-yellow-500 to-orange-500',
      links: {
        demo: '#',
      },
      featured: false,
    },
    {
      title: 'Food Delivery App Design',
      category: 'uiux',
      description: 'Complete UI/UX design for a local food delivery service with focus on speed and user satisfaction.',
      image: '🍔',
      tags: ['Mobile Design', 'User Flow', 'Prototyping', 'Figma'],
      color: 'from-red-500 to-rose-500',
      links: {
        figma: '#',
      },
      featured: false,
    },
    {
      title: 'Portfolio Website Builder',
      category: 'web',
      description: 'Web-based tool that helps students create professional portfolios with customizable templates and themes.',
      image: '🎨',
      tags: ['React', 'Next.js', 'Tailwind', 'Drag & Drop'],
      color: 'from-indigo-500 to-blue-500',
      links: {
        demo: '#',
        github: '#',
      },
      featured: true,
    },
    {
      title: 'Mental Health Support App',
      category: 'mobile',
      description: 'Mobile app concept for university students to access mental health resources and peer support.',
      image: '🧠',
      tags: ['Mobile UI', 'User Research', 'Empathy Mapping', 'Figma'],
      color: 'from-teal-500 to-cyan-500',
      links: {
        figma: '#',
      },
      featured: false,
    },
    {
      title: 'AI Chatbot Interface',
      category: 'uiux',
      description: 'Conversational UI design for an AI-powered customer service chatbot with natural language processing.',
      image: '🤖',
      tags: ['Conversational UI', 'AI/ML', 'Prototyping'],
      color: 'from-violet-500 to-purple-500',
      links: {
        demo: '#',
      },
      featured: false,
    },
    {
      title: 'Event Management System',
      category: 'web',
      description: 'Full-stack web application for managing university events with ticketing and RSVP features.',
      image: '🎫',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      color: 'from-orange-500 to-red-500',
      links: {
        demo: '#',
        github: '#',
      },
      featured: false,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my best work, creativity, and problem-solving abilities
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30 border border-blue-400/30'
                    : 'bg-slate-800/50 backdrop-blur-xl text-slate-300 hover:bg-slate-700/50 border border-white/5'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all shadow-xl relative">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-yellow-500/30">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Project Image/Icon */}
                  <div className={`relative h-56 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                      }} />
                    </div>
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">{project.image}</span>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl mb-3 text-white group-hover:text-blue-400 transition-colors font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-900/50 border border-white/5 rounded-lg text-xs text-slate-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs text-slate-500 font-medium">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      {project.links.demo && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.links.demo}
                          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-semibold flex-1 justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
                        >
                          <Eye className="w-4 h-4" />
                          View Project
                        </motion.a>
                      )}
                      {project.links.github && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.links.github}
                          className="p-2.5 bg-slate-900/50 text-slate-300 rounded-xl hover:text-white hover:bg-slate-800 transition-colors border border-white/5"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.links.figma && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.links.figma}
                          className="p-2.5 bg-slate-900/50 text-slate-300 rounded-xl hover:text-white hover:bg-slate-800 transition-colors border border-white/5"
                        >
                          <Figma className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="text-3xl text-white mb-3 font-semibold">No projects found</h3>
            <p className="text-slate-400 text-lg">Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}