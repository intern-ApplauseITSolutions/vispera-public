import { clsx } from "clsx";

/**
 * WatchVideoButton component
 */
export default function WatchVideoButton({ onClick, className, style }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-[#5EA4A4] hover:bg-[#0A374C] text-white font-bold py-2.5 px-8 rounded shadow-lg text-[10px] tracking-widest transform active:scale-95 uppercase transition-colors border border-transparent hover:border-white cursor-pointer",
        className
      )}
      style={style}
    >
      Watch Video
    </button>
  );
}
