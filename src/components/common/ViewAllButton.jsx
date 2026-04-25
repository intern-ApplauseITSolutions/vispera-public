import { clsx } from "clsx";

/**
 * ViewAllButton component
 */
export default function ViewAllButton({ onClick, label = "View All", className, style }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-[#5EA4A4] hover:bg-[#0A374C] text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center rounded-[8px]",
        "w-[180px] h-[42px] font-sans font-semibold text-base text-center capitalize",
        className
      )}
      style={style}
    >
      {label}
    </button>
  );
}
