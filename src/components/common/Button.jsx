import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Button({ children, className, variant = "primary", ...props }) {
  const variants = {
    primary: "btn-primary",
    outline: "border border-white/20 hover:border-brand-primary/50 text-white hover:bg-white/5",
    ghost: "text-text-muted hover:text-white transition-colors",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(
        "px-6 py-2.5 rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
