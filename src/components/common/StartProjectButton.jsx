import { Link } from "react-router-dom";
import { clsx } from "clsx";

/**
 * StartProjectButton component
 * 
 * @param {string} className - Additional CSS classes
 * @param {'primary' | 'dark'} variant - 'primary' (teal) or 'dark' (navy)
 * @param {object} style - Custom inline styles
 * @param {function} onClick - Click handler
 */
export default function StartProjectButton({ className, variant = "primary", style, onClick }) {
  const isDark = variant === "dark";
  
  return (
    <button
      className={clsx(
        "inline-block font-bold rounded-xl transition-all duration-300 shadow-lg text-center uppercase tracking-wider",
        isDark ? "bg-[#0A374C] hover:bg-[#5EA4A4]" : "bg-[#5EA4A4] hover:bg-[#0A374C]",
        "text-white text-[13px] md:text-sm px-8 py-3.5 md:px-10 md:py-4",
        className
      )}
      style={style}
      onClick={onClick}
    >
      Start Your Project
    </button>
  );
}
