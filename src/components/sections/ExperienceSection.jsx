import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Building, Calendar, MapPin } from 'lucide-react';
import { CardHover } from '../ui/card';

export const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      type: 'education',
      title: 'B.Sc. Computer Engineering',
      institution: 'Università Federico II',
      location: 'Naples, Italy',
      period: '2020 - Present',
      description: 'Studying computer engineering with focus on software development, algorithms, and system design.',
      icon: GraduationCap,
      current: true,
    },
    {
      type: 'work',
      title: 'Software Developer',
      institution: 'UniNa Corse',
      location: 'Naples, Italy',
      period: '2022 - Present',
      description: 'Developing software solutions for university racing team, focusing on data analysis and performance optimization.',
      icon: Building,
      current: true,
    },
    {
      type: 'future',
      title: 'M.Sc. Computer Engineering',
      institution: 'Università Federico II',
      location: 'Naples, Italy',
      period: '2024 - 2026',
      description: 'Planning to pursue Master\'s degree in Computer Engineering with specialization in advanced software systems.',
      icon: GraduationCap,
      future: true,
    },
    {
      type: 'future',
      title: 'Apple Developer Academy',
      institution: 'Apple',
      location: 'Naples, Italy',
      period: '2024',
      description: 'Planned participation in Apple Developer Academy to enhance iOS development skills and app design.',
      icon: Building,
      future: true,
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <CardHover className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-full ${
                        exp.current 
                          ? 'bg-green-600/20 text-green-400'
                          : exp.future
                          ? 'bg-blue-600/20 text-blue-400'
                          : 'bg-purple-600/20 text-purple-400'
                      }`}>
                        <IconComponent size={24} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white font-mono">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          {exp.current && (
                            <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-mono">
                              Current
                            </span>
                          )}
                          {exp.future && (
                            <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-mono">
                              Planned
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-3">
                        <h4 className="text-lg text-gray-300 font-medium">
                          {exp.institution}
                        </h4>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardHover>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};