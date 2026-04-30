export default function DummyProjectCard({
  badgeLabel = "Project",
  buttonLabel = "View",
  title = "Project name",
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[304/237] bg-gray-200 shadow-md">
      <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
        <svg
          className="w-12 h-12 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />

      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/25 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-in-out group-hover:top-0 z-20 rounded-b-lg shadow-sm whitespace-nowrap">
        {badgeLabel}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#0A374C]/80 backdrop-blur-[2px] p-3 z-10 transition-all duration-500 group-hover:opacity-0">
        <h3 className="text-white text-[10px] md:text-[11px] font-bold leading-tight line-clamp-1 text-center">
          {title}
        </h3>
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15">
        <h3 className="text-white text-xs md:text-sm font-bold leading-tight text-center">
          {title}
        </h3>
      </div>

      <div className="absolute -bottom-24 left-0 w-full flex justify-center pb-6 lg:pb-8 transition-all duration-500 ease-in-out group-hover:bottom-0 z-20">
        <button className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded shadow-lg">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
