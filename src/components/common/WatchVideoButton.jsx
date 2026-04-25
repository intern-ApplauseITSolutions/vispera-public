import { clsx } from "clsx";

/**
 * WatchVideoButton component
 */
export default function WatchVideoButton({ onClick, className, style }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-[#5EA4A4] text-white font-bold py-3.5 px-12 rounded-xl transition-all shadow-xl text-[10px] md:text-sm tracking-[0.2em] transform active:scale-95 uppercase",
        className
      )}
      style={style}
    >
      Watch Video
    </button>
  );
}
