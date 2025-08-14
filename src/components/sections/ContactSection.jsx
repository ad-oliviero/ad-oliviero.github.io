import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Github, ExternalLink, Copy } from 'lucide-react';
import { Card } from '../ui/card';
import { BackgroundGradient } from '../ui/background-gradient';

export const ContactSection = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'adriano.oliviero@studenti.unina.it',
      href: 'mailto:adriano.oliviero@studenti.unina.it',
      copyable: true,
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'ad-oliviero',
      href: 'https://github.com/ad-oliviero',
      external: true,
    },
    {
      icon: ExternalLink,
      label: t('contact.website'),
      value: 'ad-oliviero.github.io',
      href: 'https://ad-oliviero.github.io',
      external: true,
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

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
    <section id="contact" className="py-20 relative overflow-hidden">
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
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations, questions, or just to say hello!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <BackgroundGradient containerClassName="h-full">
                    <Card className="h-full text-center bg-slate-800 group">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="p-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-600">
                          <IconComponent size={32} className="text-white" />
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-bold text-white font-mono mb-2">
                            {method.label}
                          </h3>
                          <p className="text-gray-400 font-mono text-sm mb-4">
                            {method.value}
                          </p>
                        </div>

                        <div className="flex space-x-2">
                          <motion.a
                            href={method.href}
                            target={method.external ? "_blank" : undefined}
                            rel={method.external ? "noopener noreferrer" : undefined}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-mono text-sm flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IconComponent size={16} />
                            <span>Contact</span>
                          </motion.a>

                          {method.copyable && (
                            <motion.button
                              onClick={() => copyToClipboard(method.value)}
                              className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Copy size={16} />
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </BackgroundGradient>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-white font-mono">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your visions. 
                  Whether you're looking for a developer, have a question about my work, or just want to connect, I'd love to hear from you.
                </p>
                <div className="flex justify-center space-x-2 text-sm text-gray-500 font-mono">
                  <span>📍 Naples, Italy</span>
                  <span>•</span>
                  <span>🕐 CET Timezone</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};