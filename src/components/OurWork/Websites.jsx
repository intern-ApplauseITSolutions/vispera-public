import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import DummyProjectCard from "./DummyProjectCard";
import logo1 from "../../assets/images/OurWork4/logo1.png";
import logo2 from "../../assets/images/OurWork4/logo2.png";
import logo4 from "../../assets/images/OurWork4/logo4.png";
import logo5 from "../../assets/images/OurWork4/logo5.png";
import logo6 from "../../assets/images/OurWork4/logo6.png";
import logo7 from "../../assets/images/OurWork4/logo7.png";

const allProjects = [
  { 
    id: 1, 
    title: "Aloma Home Care", 
    badge: "Website",
    image: logo1,
    client: "Aloma Home Care",
    location: "Location",
    overview: "Website description goes here.",
    link: "https://alomahomecare.com/"
  },
  { 
    id: 2, 
    title: "Strom Law Firm", 
    badge: "Website",
    image: logo2,
    client: "Strom Law Firm",
    location: "Location",
    overview: "Website description goes here.",
    link: "https://stromlaw.com/",
    hasVisitButton: true
  },
  { 
    id: 3, 
    title: "The Farm", 
    badge: "Website",
    image: logo4,
    client: "The Farm",
    location: "Location",
    overview: "Website description goes here.",
    link: "https://www.thefarmsoho.com/"
  },
  { 
    id: 4, 
    title: "The Home Improvement Group", 
    badge: "Website",
    image: logo5,
    client: "The Home Improvement Group",
    location: "Location",
    overview: "Website description goes here.",
    link: "https://thig.pro/"
  },
  { 
    id: 5, 
    title: "Innovate Infinity", 
    badge: "Website",
    image: logo6,
    client: "Innovate Infinity",
    location: "Location",
    overview: "Website description goes here.",
    link: "https://innovateinfinity.in/"
  },
  { 
    id: 6, 
    title: "Yuva Mitra", 
    badge: "Website",
    image: logo7,
    client: "Yuva Mitra",
    location: "Location",
    overview: "Website description goes here.",
    link: "https://yuvamitra.org/"
  },
  { 
    id: 7, 
    title: "Website 7", 
    badge: "Website",
    client: "Client Name",
    location: "Location",
    overview: "Website description goes here.",
    link: "https://www.example.com"
  },
  { 
    id: 8, 
    title: "Website 8", 
    badge: "Website",
    client: "Client Name",
    location: "Location",
    overview: "Website description goes here.",
    link: "https://www.example.com"
  },
];

export default function Websites({ searchQuery = "", sortBy = "Latest" }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const displayedProjects = allProjects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Create array including blank cards if 5th card exists
  const allCards = [...displayedProjects];
  if (displayedProjects.length === 5) {
    // Add 3 blank cards
    allCards.push(
      { id: 'blank-1', isBlank: true },
      { id: 'blank-2', isBlank: true },
      { id: 'blank-3', isBlank: true }
    );
  }

  // Pagination logic for mobile
  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = allCards.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextGallery = () => {
    if (selectedProject?.gallery) {
      setActiveGalleryIdx((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const handlePrevGallery = () => {
    if (selectedProject?.gallery) {
      setActiveGalleryIdx((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <>
      {displayedProjects.length > 0 && (
      <section id="work" className="bg-bg-light overflow-hidden py-2 md:py-3">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-1 relative w-fit">
              <div className="relative">
                <h2 className="font-bold text-[#0A374C] leading-tight relative z-10 flex items-baseline gap-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <span className="text-6xl md:text-7xl" style={{ color: "#5EA4A452" }}>05</span>
                  <span className="text-2xl md:text-3xl">Websites</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mobile: Show paginated cards (4 per page) including blank cards */}
            <div className="contents sm:hidden">
              <AnimatePresence mode="popLayout">
                {currentCards.map((project, index) => {
                  // Render blank card
                  if (project.isBlank) {
                    return <DummyProjectCard key={project.id} badgeLabel="Website" buttonLabel="Visit Website" />;
                  }
                  
                  // Render regular card
                  return (
                <motion.div
                  key={project.id}
                  layout
                  onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[304/237] bg-gray-200 shadow-md"
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                      <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/25 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-in-out group-hover:top-0 z-20 rounded-b-lg shadow-sm">
                    {project.badge || "Project"}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0A374C]/80 backdrop-blur-[2px] p-3 z-10 transition-all duration-500 group-hover:opacity-0">
                    <h3 className="text-white text-[10px] md:text-[11px] font-bold leading-tight line-clamp-1">{project.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15">
                    <h3 className="text-white text-xs md:text-sm font-bold leading-tight text-center">{project.title}</h3>
                  </div>
                  <div className="absolute -bottom-24 left-0 w-full flex justify-center pb-6 lg:pb-8 transition-all duration-500 ease-in-out group-hover:bottom-0 z-20">
                    <button className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded shadow-lg cursor-pointer">Visit Website</button>
                  </div>
                </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Desktop: Show all cards */}
            <div className="hidden sm:contents">
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[304/237] bg-gray-200 shadow-md"
                >
                  {/* Background Image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                      <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}

                  {/* Primary Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />

                  {/* Top Centered Tag (Slides Down) - Frosted Glass Effect */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/25 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-in-out group-hover:top-0 z-20 rounded-b-lg shadow-sm">
                    {project.badge || "Project"}
                  </div>

                  {/* Persistent Title Overlay at Bottom - Hidden on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0A374C]/80 backdrop-blur-[2px] p-3 z-10 transition-all duration-500 group-hover:opacity-0">
                    <h3 className="text-white text-[10px] md:text-[11px] font-bold leading-tight line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Full Heading Overlay on Hover - Centered */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15">
                    <h3 className="text-white text-xs md:text-sm font-bold leading-tight text-center">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Action Button (Slides Up to Bottom) */}
                  <div className="absolute -bottom-24 left-0 w-full flex justify-center pb-6 lg:pb-8 transition-all duration-500 ease-in-out group-hover:bottom-0 z-20">
                    <button className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded shadow-lg cursor-pointer">
                      Visit Website
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            </div>

            {/* Mobile Pagination Controls */}
            <div className="sm:hidden col-span-1 flex items-center justify-between px-4 py-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#5EA4A4] text-white hover:bg-[#0A374C]'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#5EA4A4] text-white hover:bg-[#0A374C]'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Show More Blank Cards - Desktop only */}
            <div className="hidden sm:contents">
            {showMore && (
              <>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((blankIndex) => (
                  <DummyProjectCard key={`more-blank-${blankIndex}`} badgeLabel="Website" buttonLabel="Visit Website" />
                ))}
              </>
            )}
            </div>
          </div>

          {/* See More Button - Hidden on Mobile */}
          <div className="hidden sm:flex justify-end mt-6">
            <button onClick={() => setShowMore(!showMore)} className="flex items-center gap-2 text-[#0A374C] hover:text-[#5EA4A4] font-semibold transition-colors text-sm">
              {showMore ? 'See Less' : 'See More'}
              <svg className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      )}

      {/* Main Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />

            {/* Close Button - Outside Modal */}
            <button
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white hover:text-[#5EA4A4] transition-colors z-[110] p-2"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-8 h-8 lg:w-10 lg:h-10" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-[95%] max-w-2xl lg:max-w-5xl bg-[#0A374C] rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 flex flex-col items-stretch z-10 border border-dashed border-white/40 max-h-[92vh] overflow-y-auto scrollbar-hide"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-[5.5fr_6.5fr] gap-4 lg:gap-6 items-stretch">
                {/* Top/Left: Image Section */}
                <div className="relative w-full h-full">
                  <div className="absolute -top-[2px] left-6 lg:left-10 z-20">
                    <div className="bg-[#5EA4A4] text-[#0A374C] text-[10px] lg:text-[12px] px-8 py-2.5 rounded-b-2xl shadow-lg font-bold min-w-[120px] text-center tracking-widest uppercase">
                      {selectedProject.badge}
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] overflow-hidden border-[3px] border-[#5EA4A4] w-full h-full shadow-2xl bg-white flex flex-col justify-center">
                    {selectedProject.image ? (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-white flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom/Right: Content Section */}
                <div className="flex flex-col py-2">
                  <h3 className="text-xl md:text-lg lg:text-xl font-bold text-white font-heading leading-snug mb-3 lg:mb-4">
                    {selectedProject.title}
                  </h3>

                  <div className="space-y-2">
                    {selectedProject.client && (
                      <p className="flex items-start gap-2">
                        <span className="font-bold whitespace-nowrap text-white text-xs md:text-sm tracking-wide">• Client :</span>
                        <span className="text-white/90 text-[12px] md:text-[13px] leading-relaxed">{selectedProject.client}</span>
                      </p>
                    )}
                    {selectedProject.location && (
                      <p className="flex items-start gap-2">
                        <span className="font-bold whitespace-nowrap text-white text-sm md:text-base tracking-wide">• Location:</span>
                        <span className="text-white/90 text-[13px] md:text-[15px] leading-relaxed">{selectedProject.location}</span>
                      </p>
                    )}
                    {selectedProject.year && (
                      <p className="flex items-start gap-2">
                        <span className="font-bold whitespace-nowrap text-white text-sm md:text-base tracking-wide">• Year:</span>
                        <span className="text-white/90 text-[13px] md:text-[15px] leading-relaxed">{selectedProject.year}</span>
                      </p>
                    )}
                    {selectedProject.overview && (
                      <div className="pt-1.5">
                        <p className="text-white/90 text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6] font-light">
                          <span className="font-bold text-white mr-2 shadow-sm font-sans tracking-wide">• Project Overview:</span>
                          {selectedProject.overview}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Optional Video Button */}
                  {!selectedProject.gallery && (
                    <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#5EA4A4] hover:bg-[#0A374C] text-white font-bold py-3.5 px-12 rounded-xl transition-all shadow-xl text-[10px] md:text-xs tracking-[0.2em] transform active:scale-95 uppercase"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}

                  {/* Gallery Section - Nested Inside Content Column */}
                  {selectedProject.gallery && (
                    <div className="mt-8 lg:mt-12 relative w-full">
                      <div className="relative flex items-center w-full">
                        {/* Thumbnail Prev Button */}
                        <button className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#114057]/90 backdrop-blur flex items-center justify-center text-[#5EA4A4] border border-[#5EA4A4]/40 hover:bg-[#0A374C] transition-colors z-20 shadow-xl">
                          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        <div className="grid grid-cols-3 gap-3 lg:gap-4 w-full px-2">
                          {selectedProject.gallery.slice(0, 3).map((img, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              onClick={() => setActiveGalleryIdx(idx)}
                              className="relative cursor-pointer group w-full"
                            >
                              {/* Taller thumbnail frame */}
                              <div className="w-full h-[100px] lg:h-[150px] rounded-xl overflow-hidden border-[2px] border-[#5EA4A4]/80 shadow-md transition-all group-hover:border-[#5EA4A4]">
                                <img src={img} alt="" className="w-full h-full object-contain" />
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Thumbnail Next Button */}
                        <button className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#114057]/90 backdrop-blur flex items-center justify-center text-[#5EA4A4] border border-[#5EA4A4]/40 hover:bg-[#0A374C] transition-colors z-20 shadow-xl">
                          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Gallery Lightbox Modal */}
      <AnimatePresence>
        {activeGalleryIdx !== null && selectedProject?.gallery && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
              onClick={() => setActiveGalleryIdx(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl md:max-w-4xl h-[50vh] md:h-[65vh] flex items-center justify-center z-10 mx-auto"
            >
              {/* Close Button */}
              <button
                className="absolute -top-12 right-0 text-white/70 hover:text-white p-2"
                onClick={() => setActiveGalleryIdx(null)}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Prev Button */}
              <button
                className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20"
                onClick={(e) => { e.stopPropagation(); handlePrevGallery(); }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Main Image */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                <img
                  src={selectedProject.gallery[activeGalleryIdx]}
                  alt=""
                  className="w-full h-full object-contain bg-black/40"
                />
              </div>

              {/* Next Button */}
              <button
                className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20"
                onClick={(e) => { e.stopPropagation(); handleNextGallery(); }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Pagination Label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold tracking-widest uppercase">
                {activeGalleryIdx + 1} / {selectedProject.gallery.length}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
