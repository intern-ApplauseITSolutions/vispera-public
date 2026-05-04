import { useState } from "react";
import { clsx } from "clsx";
import InquiryModal from "./InquiryModal";

/**
 * StartProjectButton component
 * 
 * @param {string} className - Additional CSS classes
 * @param {'primary' | 'dark'} variant - 'primary' (teal) or 'dark' (navy)
 * @param {object} style - Custom inline styles
 * @param {function} onClick - Click handler (called before opening modal)
 * @param {boolean} disableModal - If true, don't render the modal (parent manages it)
 */
export default function StartProjectButton({ className, variant = "primary", style, onClick, disableModal = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDark = variant === "dark";
  
  const handleClick = (e) => {
    // Prevent event from bubbling up
    e.stopPropagation();
    e.preventDefault();
    
    if (onClick) {
      // If custom onClick provided, use it
      onClick(e);
    } else if (!disableModal) {
      // Otherwise open modal with delay (if modal not disabled)
      setTimeout(() => {
        setIsModalOpen(true);
      }, 200);
    }
  };
  
  return (
    <>
      <button
        className={clsx(
          "font-bold rounded-lg shadow-lg uppercase tracking-widest transition-all transform active:scale-95 cursor-pointer",
          isDark ? "bg-[#0A374C] hover:bg-[#5EA4A4]" : "bg-[#5EA4A4] hover:bg-[#0A374C]",
          "text-white",
          // Only apply default size if no custom className with size is provided
          !className?.includes('text-') && "text-xs",
          !className?.includes('py-') && !className?.includes('p-') && "py-3",
          !className?.includes('px-') && !className?.includes('p-') && "px-4",
          className
        )}
        style={style}
        onClick={handleClick}
      >
        Start Your Project
      </button>
      
      {/* Only render modal if not disabled */}
      {!disableModal && (
        <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
