import { clsx } from "clsx";

/**
 * ViewButton component
 */
export default function ViewButton({ onClick, label = "View", className, style }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-[#5EA4A4] hover:bg-[#0A374C] text-white font-bold py-2.5 px-8 rounded-lg transition-all shadow-md text-[10px] md:text-sm tracking-widest transform active:scale-95 uppercase",
        className
      )}
      style={style}
    >
      {label}
    </button>
  );
}
