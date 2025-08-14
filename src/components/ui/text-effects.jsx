import { motion } from "framer-motion";
import { cn } from "../../utils";

export const TextGenerateEffect = ({ words, className }) => {
  const wordsArray = words.split(" ");

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={cn("", className)}>
      {wordsArray.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export const TypewriterEffect = ({ words, className, typeSpeed = 50 }) => {
  return (
    <motion.div
      className={cn("", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={cn("inline-block", word.className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: i * typeSpeed / 1000,
            duration: 0.1,
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </motion.div>
  );
};