import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Wrench, Lightbulb } from 'lucide-react';
import { Card } from '../ui/card';

export const SkillsSection = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.languages'),
      skills: ['C', 'Python', 'C++', 'Rust', 'JavaScript', 'BrainFuck'],
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Wrench,
      title: t('skills.technologies'),
      skills: ['React', 'WebAssembly', 'Git', 'Linux', 'Node.js', 'Vite'],
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: Lightbulb,
      title: t('skills.interests'),
      skills: ['System Programming', 'Compilers', 'Graphics Programming', 'Performance Optimization'],
      color: 'from-green-400 to-blue-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section className="py-20 relative overflow-hidden">
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
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full group hover:border-gray-600 transition-colors duration-300">
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.1 + skillIndex * 0.05,
                          duration: 0.5 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg group-hover:bg-slate-700 transition-colors duration-300">
                          <span className="text-gray-300 font-mono text-sm">
                            {skill}
                          </span>
                          <div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ 
                                  delay: index * 0.1 + skillIndex * 0.05 + i * 0.1,
                                  duration: 0.3 
                                }}
                                viewport={{ once: true }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};