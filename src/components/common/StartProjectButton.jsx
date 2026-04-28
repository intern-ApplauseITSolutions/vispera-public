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
        "font-bold rounded shadow-lg uppercase tracking-widest transition-all transform active:scale-95",
        isDark ? "bg-[#0A374C] hover:bg-[#5EA4A4]" : "bg-[#5EA4A4] hover:bg-[#0A374C]",
        "text-white",
        // Only apply default size if no custom className with size is provided
        !className?.includes('text-') && "text-xs",
        !className?.includes('py-') && !className?.includes('p-') && "py-3",
        !className?.includes('px-') && !className?.includes('p-') && "px-4",
        className
      )}
      style={style}
      onClick={onClick}
    >
      Start Your Project
    </button>
  );
}
