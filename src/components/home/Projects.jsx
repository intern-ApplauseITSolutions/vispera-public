import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { ViewButton, WatchVideoButton, ViewAllButton } from "../common";

import ncpedpImg from "../../assets/images/NCPEDP-Javed-Abidi-Fellowship-on-Disability.png";
import krushakImg from "../../assets/images/Krushak-Mitra-Agro-Services-Pvt-Ltd.png";
import gizImg from "../../assets/images/GIZ-Green-Innovation-Centres-Agriculture-Food-Sector.png";
import jalImg from "../../assets/images/Jal-Srot-Punarjivikaran.png";
import everyDropImg from "../../assets/images/Every-Drop-Counts!.png";
import greenInnovImg from "../../assets/images/Green-Innovation-Centres-for-the-Agriculture-and-Food-Sector.png";
import shamImg from "../../assets/images/Sham-Sundar-Misal-Nashik.png";
import khedImg from "../../assets/images/aloma-logo-1.webp";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

// Gallery Images for GIZ
import gizGallery1 from "../../assets/images/GIZ-India-doc-img1.png";
import gizGallery2 from "../../assets/images/GIZ-India-doc-img2.png";
import gizGallery3 from "../../assets/images/GIZ-India-doc-img3.png";

const categories = ["All", "Documentaries", "Corporate Films", "Brand Films", "Short Content"];

const projects = [
  {
    id: 1,
    title: "NCPEDP Javed Abidi Fellowship on Disability",
    category: "Documentaries",
    image: ncpedpImg,
    badge: "Documentary",
    client: "NCPEDP- National Centre For Promotion Of Employment For Disabled People",
    location: "6 States",
    overview: "The Film \"Redefining Disability And Inclusion: NCPEDP-Javed Abidi Fellowship\" Captures The Impactful Stories Of Young Leaders With Disabilities Who Are Shaping India's Future. Supported By The National Centre For Promotion Of Employment For Disabled People (NCPEDP), These Fellows Challenge Accessibility Barriers, Promote Inclusive Education, And Empower Marginalized Communities. Through Personal Journeys And Advocacy, They Influence Infrastructure And Design Standards, Address Digital Accessibility, And Combat Stigma. This Film Highlights NCPEDP's Mission To Create A New Generation Of Changemakers, Ensuring That Disability Rights Become A Lived Reality Across India.",
    link: "https://youtu.be/fGfFEnbQNV0?si=xZINrSPTRd4M38j_"
  },
  {
    id: 2,
    title: "Krushak Mitra Agro Services Pvt. Ltd.",
    category: "Corporate Films",
    image: krushakImg,
    badge: "Corporate Film",
    client: "Krushak Mitra Agro Services Pvt. Ltd.",
    location: "Nashik District And Surrounding Regions",
    overview: "This Corporate Film Showcases The Transformative Work Of Krushak Mitra Agro Services Pvt. Ltd. In Strengthening Farming Communities Across Maharashtra. It Highlights Their Farmer-First Approach Through Timely Agri-Inputs, Expert Advisory, FPC Formation, And Market Linkages. Through Real Farmer Stories And On-Ground Interventions, The Film Captures How Krushak Mitra Is Turning Farmers Into Entrepreneurs, Enhancing Rural Livelihoods, And Promoting Sustainable Agricultural Practices.",
    link: "https://www.youtube.com/watch?v=mUzWwi8ClQI"
  },
  {
    id: 3,
    title: "GIZ's Green Innovation Centres for the Agriculture and Food Sector",
    category: "Documentaries",
    image: gizImg,
    badge: "Documentary",
    client: "GIZ India",
    location: "Maharashtra And Andhra Pradesh",
    overview: "This Film Presents A Powerful Overview Of GIZ's Renewable Energy Initiatives Implemented Across Maharashtra And Andhra Pradesh, Showcasing The Tangible Impact Of Sustainable Technologies In Rural And Semi-Urban Landscapes. Through Real Life Stories, Field Visuals, And Expert Insights, The Film Captures How GIZ-Supported Solutions—Ranging From Solar Dryer Machines To Biogas Systems And Decentralized Energy Models—Are Transforming Lives, Improving Livelihoods, And Fostering Environmental Resilience. By Highlighting The Success Stories Of Local Communities, Institutions, And Entrepreneurs, The Film Not Only Documents The Scale And Innovation Of The Interventions But Also Reinforces The Potential Of Renewable Energy As A Catalyst For Inclusive Development And Climate Action In India.",
    link: "https://www.youtube.com/watch?v=bZn8i6BcEvY"
  },
  {
    id: 4,
    title: "जलस्रोतों का पुनर्जीवीकरण - एक परिचय",
    category: "Brand Films",
    image: jalImg,
    badge: "Informative Film",
    client: "Unknown",
    location: "Unknown",
    overview: "This informative film provides a powerful introduction to the revitalization of water sources.",
    link: "https://www.youtube.com/watch?v=mUzWwi8ClQI"
  },
  {
    id: 5,
    title: "Every Drop Counts!",
    category: "Documentaries",
    image: everyDropImg,
    badge: "Documentary",
    client: "Concern India Foundation",
    location: "Aurangabad Block",
    overview: "This Documentary, Titled \"Every Drop Counts,\" Showcases The Transformative Impact Of The Integrated Watershed Development Project Implemented By The Concern India Foundation. Spanning Across The Remote Villages Of Babhultel, Naygavhan, And Mahankalwadgaon, The Film Highlights The Community-Driven Efforts To Combat Water Scarcity, Enhance Agricultural Productivity, And Improve Livelihoods Through Sustainable Practices. Key Interventions Included The Desilting Of Percolation Tanks, Construction Of Recharge Shafts, And Provision Of Modern Irrigation Systems, Resulting In Significant Improvements In Water Storage Capacity And Agricultural Output. The Documentary Captures The Journey From Despair To Hope, Illustrating The Power Of Unity And Innovative Solutions In Creating Lasting Change.",
    link: "https://youtu.be/ocxp4DhjoWc?si=JZ_FhmL1g50z6PPp"
  },
  {
    id: 6,
    title: "Green Innovation Centres for the Agriculture and Food Sector",
    category: "Documentary",
    image: greenInnovImg,
    badge: "Documentary",
    client: "GIZ India",
    year: "2024",
    overview: "Documented Renewable Energy Innovations In Maharashtra And Andhra Pradesh For The GIZ Project. Produced 150+ High-Quality Photographs, 6 Testimonies, 6 Interview Videos, And A 3-Minute Process Video. Ensured Consent From All Subjects And Provided Edited Media With Detailed Metadata",
    link: "https://www.youtube.com/watch?v=bZn8i6BcEvY",
    gallery: [gizGallery1, gizGallery2, gizGallery3, gizGallery1, gizGallery2, gizGallery3]
  },
  {
    id: 7,
    title: "Sham Sundar Misal, Nashik",
    category: "Corporate Films",
    image: shamImg,
    badge: "Corporate Film",
    client: "Sham Sundar Misal",
    location: "Nashik",
    link: "https://www.youtube.com/watch?v=-ThOfyAu-qg"
  },
  {
    id: 8,
    title: "Aloma Home Care",
    category: "Documentaries",
    image: khedImg,
    badge: "Website",
    client: "Aloma Home Care",
    link: "https://alomahomecare.com/",
    isExternal: true
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(null);
  const [galleryStartIdx, setGalleryStartIdx] = useState(0);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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

  const handleNextThumbnails = () => {
    if (selectedProject?.gallery && galleryStartIdx + 3 < selectedProject.gallery.length) {
      setGalleryStartIdx(galleryStartIdx + 1);
    }
  };

  const handlePrevThumbnails = () => {
    if (galleryStartIdx > 0) {
      setGalleryStartIdx(galleryStartIdx - 1);
    }
  };

  return (
    <>
      <section id="work" className="bg-bg-light overflow-hidden py-4 md:py-6">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 mb-8 w-full">
            <div className="relative flex flex-col items-center lg:items-start">
              <p
                className="text-[#5EA4A4] text-center lg:text-left w-full"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "42px",
                  letterSpacing: "0",
                  verticalAlign: "middle",
                  textTransform: "uppercase"
                }}
              >
                our work
              </p>

              <div className="relative inline-block mt-[-8px]">
                <h2
                  className="text-[#0A374C] relative z-10 text-center lg:text-left"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "32px",
                    lineHeight: "42px",
                    letterSpacing: "0.02em",
                    verticalAlign: "middle"
                  }}
                >
                  Stories We've Told
                </h2>
                {/* Decorative Icon precisely overlapping the 'd' in Told */}
                <div className="absolute top-0 -right-5 w-7 h-7 opacity-80 z-20 pointer-events-none">
                  <img src={headingBg} alt="" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 md:gap-2.5 pb-2 lg:pb-0 scrollbar-hide flex-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 md:px-6 py-2.5 rounded-full text-[9px] md:text-[10px] lg:text-xs font-bold tracking-wider transition-all duration-300 border font-body whitespace-nowrap ${activeCategory === cat
                    ? "bg-[#0A374C] text-white border-[#0A374C] shadow-md"
                    : "bg-white text-gray-400 border-gray-200 hover:border-[#5EA4A4] hover:text-[#5EA4A4]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="min-h-[300px] px-8 sm:px-0">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                  {filtered.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      onClick={() => {
                        if (project.isExternal) {
                          window.open(project.link, "_blank", "noopener,noreferrer");
                        } else {
                          setSelectedProject(project);
                          setGalleryStartIdx(0);
                        }
                      }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      className={`group relative rounded-[12px] overflow-hidden cursor-pointer aspect-[304/237] bg-gray-200 shadow-md ${index >= 4 && index < 6 ? 'hidden md:block' : ''} ${index >= 6 ? 'hidden lg:block' : ''}`}
                    >
                      {/* Background Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Primary Overlay on Hover */}
                      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />

                      {/* Top Centered Tag (Slides Down) - Frosted Glass Effect */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/25 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-in-out group-hover:top-0 z-20 rounded-b-lg shadow-sm">
                        {project.badge || project.category}
                      </div>

                      {/* Persistent Title Overlay at Bottom */}
                      <div
                        className="absolute bottom-0 left-0 w-full bg-[#0A374C]/70 flex items-center px-4 z-10 transition-all duration-500 group-hover:translate-y-[120%]"
                        style={{
                          height: "46px",
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px"
                        }}
                      >
                        <h3 className="text-white text-[10px] md:text-[11px] font-bold leading-tight w-full text-center whitespace-nowrap overflow-hidden text-ellipsis">
                          {project.title}
                        </h3>
                      </div>

                      {/* Hover Content Overlay (Centers Title & Button) */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none group-hover:pointer-events-auto">
                        <h3 className="text-white text-[13px] md:text-[15px] font-bold text-center leading-snug drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 max-w-full break-words">
                          {project.title}
                        </h3>
                        <button className="absolute bottom-5 bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded shadow-lg translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 border border-transparent hover:border-white">
                          {project.isExternal ? "Visit Website" : ([4].includes(project.id) ? "Watch Video" : "View")}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-[#0A374C]/60 italic font-medium text-lg">
                  There are no short content available!
                </p>
              </div>
            )}
          </div>

          {/* View All Button */}
          <div className="flex justify-center pt-8 md:pt-12 pb-4">
            <ViewAllButton
              onClick={() => navigate("/our-work")}
            />
          </div>
        </div>
      </section>

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
                  <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#5EA4A4] text-[#0A374C] text-[8px] md:text-[10px] lg:text-[12px] px-4 md:px-6 lg:px-8 py-2 md:py-2.5 rounded-b-2xl shadow-lg font-bold min-w-[100px] md:min-w-[120px] text-center tracking-widest capitalize">
                      {selectedProject.badge}
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] overflow-hidden border-[3px] border-[#5EA4A4] w-full h-full shadow-2xl bg-black/20 flex flex-col justify-center relative group cursor-pointer"
                    onClick={() => {
                      if (selectedProject.link && !selectedProject.gallery) {
                        window.open(selectedProject.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    {[1, 2, 3, 4, 5, 7].includes(selectedProject.id) && (
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#5EA4A4] ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
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
                        <span className="font-bold whitespace-nowrap text-white text-xs md:text-sm tracking-wide">• Location:</span>
                        <span className="text-white/90 text-[12px] md:text-[13px] leading-relaxed">{selectedProject.location}</span>
                      </p>
                    )}
                    {selectedProject.year && (
                      <p className="flex items-start gap-2">
                        <span className="font-bold whitespace-nowrap text-white text-xs md:text-sm tracking-wide">• Year:</span>
                        <span className="text-white/90 text-[12px] md:text-[13px] leading-relaxed">{selectedProject.year}</span>
                      </p>
                    )}
                    {selectedProject.overview && (
                      <div className="pt-1">
                        <p className="text-white/90 text-[12px] md:text-[13px] leading-[1.5] font-light">
                          <span className="font-bold text-white mr-2 shadow-sm font-sans tracking-wide">• Project Overview:</span>
                          {selectedProject.overview}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Optional Video Button */}
                  {!selectedProject.gallery && (
                    <div className="mt-6 lg:mt-8 flex justify-center lg:justify-start">
                      <button
                        onClick={() => window.open(selectedProject.link, "_blank", "noopener,noreferrer")}
                        className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white font-bold py-2.5 px-10 rounded-xl transition-colors shadow-xl text-[9px] md:text-[10px] tracking-[0.2em] transform active:scale-95 uppercase border border-transparent hover:border-white"
                      >
                        Watch Video
                      </button>
                    </div>
                  )}

                  {/* Gallery Section - Nested Inside Content Column */}
                  {selectedProject.gallery && (
                    <div className="mt-4 lg:mt-6 relative w-full">
                      <div className="relative flex items-center w-full">
                        {/* Thumbnail Prev Button */}
                        <button 
                          onClick={handlePrevThumbnails}
                          disabled={galleryStartIdx === 0}
                          className={`absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur flex items-center justify-center border shadow-xl transition-colors z-20 ${
                            galleryStartIdx === 0 
                              ? 'bg-gray-400/50 text-gray-300 border-gray-300/40 cursor-not-allowed' 
                              : 'bg-[#114057]/90 text-[#5EA4A4] border-[#5EA4A4]/40 hover:bg-[#0A374C]'
                          }`}
                        >
                          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        <div className="grid grid-cols-3 gap-3 lg:gap-4 w-full px-2">
                          {selectedProject.gallery.slice(galleryStartIdx, galleryStartIdx + 3).map((img, idx) => (
                            <motion.div
                              key={galleryStartIdx + idx}
                              whileHover={{ scale: 1.05 }}
                              onClick={() => setActiveGalleryIdx(galleryStartIdx + idx)}
                              className="relative cursor-pointer group w-full"
                            >
                              {/* Taller thumbnail frame */}
                              <div className="w-full h-[100px] lg:h-[150px] rounded-xl overflow-hidden border-[2px] border-[#5EA4A4]/80 shadow-md transition-all group-hover:border-[#5EA4A4]">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Thumbnail Next Button */}
                        <button 
                          onClick={handleNextThumbnails}
                          disabled={galleryStartIdx + 3 >= selectedProject.gallery.length}
                          className={`absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur flex items-center justify-center border shadow-xl transition-colors z-20 ${
                            galleryStartIdx + 3 >= selectedProject.gallery.length
                              ? 'bg-gray-400/50 text-gray-300 border-gray-300/40 cursor-not-allowed'
                              : 'bg-[#114057]/90 text-[#5EA4A4] border-[#5EA4A4]/40 hover:bg-[#0A374C]'
                          }`}
                        >
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
