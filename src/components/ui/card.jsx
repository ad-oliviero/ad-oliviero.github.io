import { motion } from "framer-motion";
import { cn } from "../../utils";

export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHover = ({ className, children, ...props }) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 shadow-xl cursor-pointer",
        className
      )}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};