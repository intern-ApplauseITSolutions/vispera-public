import { motion } from "framer-motion";
import { clsx } from "clsx";

export default function SectionHeading({ 
  title, 
  subtitle, 
  align = "center", 
  className 
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };

  return (
    <div className={clsx("flex flex-col mb-8", alignmentClasses[align], className)}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary font-bold tracking-[0.3em] text-[10px] md:text-sm uppercase mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-heading leading-tight"
        >
          {title}
        </motion.h2>
      )}
    </div>
  );
}
