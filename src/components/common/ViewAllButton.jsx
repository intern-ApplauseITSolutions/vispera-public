import { clsx } from "clsx";

/**
 * ViewAllButton component
 */
export default function ViewAllButton({ onClick, label = "View All", className, style }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-[#5EA4A4] hover:bg-[#0A374C] text-white font-bold py-2.5 px-8 rounded shadow-lg text-[10px] tracking-widest transform active:scale-95 uppercase transition-all",
        className
      )}
      style={style}
    >
      {label}
    </button>
  );
}
