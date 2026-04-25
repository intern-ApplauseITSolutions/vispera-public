import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

export default function OurWorkHeader({ onSearch, onSort }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortOptions = [
    "All",
    "Documentary",
    "Corporate Films",
    "Reels & Short Films",
    "Films from the Project",
    "Websites"
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleSort = (option) => {
    onSort(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full bg-bg-light">
      <div className="w-full px-6 md:px-12 lg:px-16 py-6 md:py-8">
        {/* Centered Heading with Camera Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-block">
            <h2
              className="text-[#0A374C] relative z-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-[32px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                lineHeight: "1.3",
                letterSpacing: "0.02em",
                verticalAlign: "middle"
              }}
            >
              Stories We've Told
            </h2>
            {/* Decorative Icon precisely overlapping the 'd' in Told */}
            <div className="absolute top-0 -right-3 sm:-right-4 md:-right-5 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-80 z-20 pointer-events-none">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Search and Sort Container */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5EA4A4] w-5 h-5" />
              <input
                type="text"
                placeholder="Search by film name or type..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-12 pr-12 py-2.5 md:py-2 rounded-2xl border-2 border-[#5EA4A4] bg-white text-[#0A374C] placeholder-gray-400 focus:outline-none focus:border-[#5EA4A4] transition-all text-sm md:text-base"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#5EA4A4] hover:bg-[#4a9494] text-white p-2 rounded-full transition-all">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full md:w-80 md:flex-shrink-0">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-6 py-2.5 md:py-2 rounded-2xl border-2 border-gray-200 bg-white text-gray-500 hover:border-gray-300 transition-all flex items-center justify-between text-sm md:text-base"
            >
              <span>Sort by...</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto">
                {sortOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSort(option)}
                    className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 transition-all text-sm border-b border-gray-100 last:border-b-0"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
