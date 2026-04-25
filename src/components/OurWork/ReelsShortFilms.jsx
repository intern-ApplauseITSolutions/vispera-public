import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import clientLogo1 from "../../assets/images/OurWork2/clientlogo1.png";
import clientLogo2 from "../../assets/images/OurWork2/clientlogo2.png";
import cadA1 from "../../assets/images/OurWork2/cadA1.png";
import cadA2 from "../../assets/images/OurWork2/cadA2.png";
import cadA3 from "../../assets/images/OurWork2/cadA3.png";
import cadA4 from "../../assets/images/OurWork2/cadA4.png";
import cadB1 from "../../assets/images/OurWork2/cadB1.png";
import cadB2 from "../../assets/images/OurWork2/cadB2.png";
import cadB3 from "../../assets/images/OurWork2/cadB3.png";
import cftiFilm from "../../assets/images/OurWork2/CFTI FILM 1.mp4";

const allProjects = [
  { 
    id: 1, 
    title: "CFTI Films", 
    badge: "Reels",
    image: clientLogo1,
    client: "Client Name",
    location: "Location",
    overview: "Project description goes here.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be",
    gallery: [cadA1, cadA2, cadA3, cadA4],
    video: cftiFilm
  },
  { 
    id: 2, 
    title: "Yuva Mitra Films", 
    badge: "Reels",
    image: clientLogo2,
    client: "Yuva Mitra",
    location: "Location",
    overview: "Project description goes here.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be",
    gallery: [
      { image: cadB1, title: "Goat, Big Dreams | How a Rural Woman Built Her Business from Scratch", video: "https://youtu.be/_ONUqerbJBo?si=otAB7jH7ig5PF3rA" },
      { image: cadB2, title: "The story of a couple earning lakhs in profit solely through goats, without any farming", video: "https://youtu.be/dqabTJQeJZQ?si=lCUiPyhwC3VNUxeD" },
      { image: cadB3, title: "The success story of Girijabai from Padoshi village", video: "https://youtu.be/a_wN21wtC0o?si=0V40gucbryCfVvD1" }
    ]
  },
  { 
    id: 3, 
    title: "Project One", 
    badge: "Project",
    client: "Client Name",
    location: "Location",
    overview: "Project description goes here.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 4, 
    title: "Project Two", 
    badge: "Project",
    client: "Client Name",
    location: "Location",
    overview: "Project description goes here.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 5, 
    title: "Project Three", 
    badge: "Project",
    client: "Client Name",
    location: "Location",
    overview: "Project description goes here.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 6, 
    title: "Project Four", 
    badge: "Project",
    client: "Client Name",
    location: "Location",
    overview: "Project description goes here.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 7, 
    title: "Project Five", 
    badge: "Project",
    client: "Client Name",
    location: "Location",
    overview: "Project description goes here.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
  { 
    id: 8, 
    title: "Project Six", 
    badge: "Project",
    client: "Client Name",
    location: "Location",
    overview: "Project description goes here.",
    link: "https://www.youtube.com/watch?si=XPtEjwcZ2Frt_Rye&v=mUzWwi8ClQI&feature=youtu.be"
  },
];

export default function ReelsShortFilms({ searchQuery = "", sortBy = "Latest" }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const filteredProjects = allProjects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Create array including blank cards if 5th card exists
  const allCards = [...filteredProjects];
  if (filteredProjects.length === 5) {
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
      {filteredProjects.length > 0 && (
      <section id="work" className="bg-bg-light overflow-hidden py-2 md:py-3">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-1 relative w-fit">
              <div className="relative">
                <h2 className="font-bold text-[#0A374C] font-heading leading-tight relative z-10 flex items-baseline gap-3">
                  <span className="text-6xl md:text-7xl" style={{ color: "#5EA4A452" }}>03</span>
                  <span className="text-2xl md:text-3xl">Reels & Short Films</span>
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
                    return (
                      <div key={project.id} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-300 shadow-md flex flex-col items-stretch">
                        <div className="flex-1 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-[#0A374C]/80 backdrop-blur-[2px] p-3 z-10 transition-opacity duration-500 group-hover:opacity-0">
                          <h3 className="text-white text-[10px] md:text-[11px] font-bold leading-tight line-clamp-1 text-center">Project name</h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15">
                          <h3 className="text-white text-xs md:text-sm font-bold leading-tight text-center">Project name</h3>
                        </div>
                        <div className="absolute -bottom-24 left-0 w-full flex justify-center pb-6 lg:pb-8 transition-all duration-500 ease-in-out group-hover:bottom-0 z-20">
                          <button className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded shadow-lg">Watch Video</button>
                        </div>
                      </div>
                    );
                  }
                  
                  // Render regular card
                  return (
                <motion.div
                  key={project.id}
                  layout
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-gray-200 shadow-md"
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-fit transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center">
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
                    <button className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded shadow-lg">Watch Video</button>
                  </div>
                </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Desktop: Show all cards */}
            <div className="hidden sm:contents">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-gray-200 shadow-md"
                >
                  {/* Background Image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-fit transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center">
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
                    <button className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded shadow-lg">
                      Watch Video
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
                  <div key={`more-blank-${blankIndex}`} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-300 shadow-md flex flex-col items-stretch">
                    <div className="flex-1 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0A374C]/80 backdrop-blur-[2px] p-3 z-10 transition-opacity duration-500 group-hover:opacity-0">
                      <h3 className="text-white text-[10px] md:text-[11px] font-bold leading-tight line-clamp-1 text-center">Project name</h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15">
                      <h3 className="text-white text-xs md:text-sm font-bold leading-tight text-center">Project name</h3>
                    </div>
                    <div className="absolute -bottom-24 left-0 w-full flex justify-center pb-6 lg:pb-8 transition-all duration-500 ease-in-out group-hover:bottom-0 z-20">
                      <button className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded shadow-lg">Watch Video</button>
                    </div>
                  </div>
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
              className="relative w-[95%] max-w-2xl lg:max-w-5xl bg-[#0A374C] rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 flex flex-col items-stretch z-10 border-2 border-dashed border-white/40 max-h-[92vh] overflow-y-auto scrollbar-hide"
            >
              {/* Header with Title */}
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-lg lg:text-xl font-bold text-white font-heading">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Gallery Grid */}
              {selectedProject.gallery && (
                <div className="relative w-full mb-8 flex justify-center">
                  <div className={selectedProject.id === 1 ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-fit" : "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-fit"}>
                    {selectedProject.gallery.map((item, idx) => {
                      const img = typeof item === 'string' ? item : item.image;
                      const videoLink = typeof item === 'string' ? null : item.video;
                      const title = typeof item === 'string' ? `${selectedProject.title} ${idx + 1}` : item.title;
                      const cardSize = selectedProject.id === 1 ? "w-48 h-40 md:w-40 md:h-32 lg:w-48 lg:h-40" : "w-56 h-44 md:w-52 md:h-40 lg:w-64 lg:h-52";
                      
                      return (
                        <motion.div
                          key={idx}
                          onClick={() => {
                            if (videoLink) {
                              window.open(videoLink, '_blank');
                            } else if (selectedProject.video) {
                              setPlayingVideo(selectedProject.video);
                            }
                          }}
                          className={`group relative rounded-2xl overflow-hidden cursor-pointer ${cardSize} bg-gray-200 shadow-md`}
                        >
                          {/* Background Image */}
                          <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                          {/* Primary Overlay on Hover */}
                          <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />

                          {/* Top Centered Tag (Slides Down) - Frosted Glass Effect */}
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/25 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-in-out group-hover:top-0 z-20 rounded-b-lg shadow-sm">
                            Video
                          </div>

                          {/* Persistent Title Overlay at Bottom */}
                          <div className="absolute bottom-0 left-0 right-0 bg-[#0A374C]/80 backdrop-blur-[2px] p-3 z-10 transition-all duration-500 group-hover:translate-y-full">
                            <h3 className="text-white text-[10px] font-bold leading-tight line-clamp-1">
                              {title}
                            </h3>
                          </div>

                          {/* Full Heading Overlay on Hover */}
                          <div className="absolute inset-0 bg-[#0A374C]/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 z-15">
                            <h3 className="text-white text-xs md:text-sm font-bold leading-tight text-center">
                              {title}
                            </h3>
                          </div>

                          {/* Hover Action Button (Slides Up to Bottom) */}
                          <div className="absolute -bottom-24 left-0 w-full flex justify-center pb-6 transition-all duration-500 ease-in-out group-hover:bottom-0 z-20">
                            <button className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded shadow-lg">
                              Watch Video
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}


            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Player Modal */}
      <AnimatePresence>
        {playingVideo && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
              onClick={() => setPlayingVideo(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
                onClick={() => setPlayingVideo(null)}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Video Player */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <video
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                >
                  <source src={playingVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
