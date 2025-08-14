import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Mail, Github, ExternalLink } from 'lucide-react';
import { BackgroundGradient } from '../ui/background-gradient';
import { TextGenerateEffect } from '../ui/text-effects';
import { calculateAge } from '../../utils';

export const HeroSection = () => {
  const { t } = useTranslation();
  const age = calculateAge();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text font-mono">Adriano</span>
            <br />
            <span className="text-white font-mono">Oliviero</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-mono"
          >
            <TextGenerateEffect words={t('hero.title')} />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              {t('hero.description', { age })}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <BackgroundGradient className="rounded-full">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-slate-900 text-white px-8 py-3 rounded-full font-mono font-medium flex items-center space-x-2 hover:bg-slate-800 transition-colors duration-200"
              >
                <Mail size={20} />
                <span>{t('hero.contact')}</span>
              </button>
            </BackgroundGradient>

            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/ad-oliviero"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="/"
                className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={24} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            onClick={() => scrollToSection('#projects')}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};