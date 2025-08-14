import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, Shield } from 'lucide-react';
import { CardHover } from '../ui/card';
import { BackgroundGradient } from '../ui/background-gradient';

export const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Brainfuck Live Interpreter',
      description: 'Real-time Brainfuck interpreter using WebAssembly for high performance. Features live code execution and syntax highlighting.',
      tech: ['WebAssembly', 'C', 'JavaScript'],
      liveUrl: '/bfli/',
      githubUrl: 'https://github.com/ad-oliviero/bfli',
      featured: true,
    },
    {
      title: 'Unit Converter',
      description: 'Mobile app for converting between various units of measurement with clean, intuitive interface.',
      tech: ['React Native', 'JavaScript'],
      githubUrl: 'https://github.com/ad-oliviero/unitconverter',
      privacyUrl: '/privacy-policy/unitconverter.html',
    },
    {
      title: 'Simple Raycasting',
      description: 'Basic raycasting engine implementation demonstrating 3D rendering techniques in 2D space.',
      tech: ['C', 'Graphics Programming'],
      githubUrl: 'https://github.com/ad-oliviero/simple-raycasting',
    },
    {
      title: 'Finance Tracker',
      description: 'Personal finance management app with Google integration for tracking expenses and income.',
      tech: ['Mobile Development', 'Google APIs'],
      githubUrl: 'https://github.com/TheDarkBug/ftracker',
      privacyUrl: '/privacy-policy/ftracker.html',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              {project.featured ? (
                <BackgroundGradient className="h-full">
                  <ProjectCard project={project} t={t} />
                </BackgroundGradient>
              ) : (
                <CardHover className="h-full">
                  <ProjectCard project={project} t={t} />
                </CardHover>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, t }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white font-mono">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 bg-gradient-to-r from-blue-400 to-purple-600 text-white text-xs rounded-full font-mono">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-mono text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            <span>{t('projects.viewLive')}</span>
          </motion.a>
        )}
        
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 font-mono text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            <span>{t('projects.viewSource')}</span>
          </motion.a>
        )}

        {project.privacyUrl && (
          <motion.a
            href={project.privacyUrl}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 font-mono text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Shield size={16} />
            <span>{t('projects.privacy')}</span>
          </motion.a>
        )}
      </div>
    </div>
  );
};