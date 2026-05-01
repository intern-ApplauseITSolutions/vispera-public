import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WatchVideoButton } from "../common";
import ncpedpImg from "../../assets/images/NCPEDP-Javed-Abidi-Fellowship-on-Disability.png";
import gizImg from "../../assets/images/GIZ-India-doc-img1.png";
import everyDropImg from "../../assets/images/service-img-9.png";
import shapingImg from "../../assets/images/Shaping-Futures-The-WASH-Projects-Impact-in-Khed-Block.png";
import bgImg from "../../assets/images/Group-39875.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";
import tagImg from "../../assets/images/tag.png";

const stories = [
  {
    id: 1,
    tag: "Documentary",
    title: "NCPEDP Javed Abidi Fellowship on Disability",
    client: "NCPEDP- National Centre For Promotion Of Employment For Disabled People",
    location: "6 States",
    overview:
      'The Film "Redefining Disability And Inclusion: NCPEDP-Javed Abidi Fellowship" Captures The Impactful Stories Of Young Leaders With Disabilities Who Are Shaping India\'s Future. Supported By The National Centre For Promotion Of Employment For Disabled People (NCPEDP), These Fellows Challenge Accessibility Barriers, Promote Inclusive Education, And Empower Marginalized Communities. Through Personal Journeys And Advocacy, They Influence Infrastructure And Design Standards, Address Digital Accessibility, And Combat Stigma. This Film Highlights NCPEDP\'s Mission To Create A New Generation Of Changemakers, Ensuring That Disability Rights Become A Lived Reality Across India.',
    link: "https://youtu.be/fGfFEnbQNV0?si=xZINrSPTRd4M38j_",
    image: ncpedpImg,
  },
  {
    id: 2,
    tag: "Documentary",
    title: "Shaping Futures: The WASH Project's Impact in Khed Block",
    client: "Yuva Mitra",
    location: "Khed, Pune Block",
    overview:
      ' "Shaping Futures: The WASH Project\'s Impact In Khed Block" Is A Documentary Film That Showcases The Transformative Effects Of The Water, Sanitation, And Hygiene (WASH) Project Implemented By Yuva Mitra In Collaboration With Tata Trusts And Tata AutoComp Systems. Set In Khed Block, Pune, The Film Highlights The Significant Improvements In School Sanitation Facilities And Menstrual Hygiene Management, Depicting How These Changes Have Enhanced Health, Education, And Overall Quality Of Life In The Community. Through Interviews, Project Implementation Footage, Educational Sessions, And Personal Testimonials, The Film Illustrates The Project\'s Success In Reducing Absenteeism, Empowering Students, And Fostering Sustainable Community Development.',
    link: "https://www.youtube.com/watch?v=th8X9Hm_EBo",
    image: shapingImg,
  },
  {
    id: 3,
    tag: "Documentary",
    title: "Every Drop Counts!",
    client: "Concern India Foundation",
    location: "Aurangabad Block",
    overview:
      'This Documentary, Titled "Every Drop Counts," Showcases The Transformative Impact Of The Integrated Watershed Development Project Implemented By The Concern India Foundation. Spanning Across The Remote Villages Of Babhultel, Naygavhan, And Mahankalwadgaon, The Film Highlights The Community-Driven Efforts To Combat Water Scarcity, Enhance Agricultural Productivity, And Improve Livelihoods Through Sustainable Practices. Key Interventions Included The Desilting Of Percolation Tanks, Construction Of Recharge Shafts, And Provision Of Modern Irrigation Systems, Resulting In Significant Improvements In Water Storage Capacity And Agricultural Output. The Documentary Captures The Journey From Despair To Hope, Illustrating The Power Of Unity And Innovative Solutions In Creating Lasting Change.',
    link: "https://youtu.be/ocxp4DhjoWc?si=JZ_FhmL1g50z6PPp",
    image: everyDropImg,
  },
];

export default function FeaturedImpact() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + stories.length) % stories.length);
  const next = () => setCurrent((c) => (c + 1) % stories.length);

  const story = stories[current];

  return (
    <section id="impact" className="pt-0 pb-6 md:pb-12 bg-bg-light overflow-hidden">
      <div className="w-full relative">
        {/* Header - Padded for readability */}
        <div className="text-center mb-8 px-6 relative w-full flex flex-col items-center">
          <p 
            className="text-[#5EA4A4] w-full text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "42px",
              textAlign: "center",
              verticalAlign: "middle",
              textTransform: "uppercase"
            }}
          >
            FEATURED IMPACT
          </p>
          <div className="relative inline-block mt-[-4px] md:mt-[-8px] px-4 sm:px-0">
            <h3 
              className="text-[#0A374C] relative z-10 text-center text-[26px] sm:text-[28px] md:text-[32px] leading-[34px] sm:leading-[38px] md:leading-[42px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                letterSpacing: "0.02em",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              Stories That Matter
            </h3>
            <div className="absolute top-0 -right-3 w-7 h-7 opacity-80 z-0 pointer-events-none">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Full-Bleed Carousel Container - Stable Compact Height */}
        <div
          className="relative overflow-hidden min-h-[450px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {/* Background image overlay removed per user request */}

          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative z-10"
            >
              <div className="w-full mx-auto px-6 md:px-10 lg:px-14 xl:px-24 py-12 grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-6 xl:gap-14 items-stretch border-x-2 border-dashed border-white">

                {/* Image Area - Card Style */}
                <div className="xl:col-span-6 relative lg:max-w-[760px] lg:mx-auto xl:max-w-none">
                  {/* Badge */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-36 md:w-44 xl:w-48 pointer-events-none">
                    <img src={tagImg} alt="" className="w-full h-auto" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-[8px] md:text-[10px] font-bold tracking-[0.2em] pb-1.5 md:pb-2">
                        {story.tag}
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-[2rem] overflow-hidden border-[6px] border-[#5EA4A4] shadow-2xl aspect-[3/2] md:aspect-video xl:aspect-[3/2] h-auto flex items-center justify-center group">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <a
                      href={story.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-20 cursor-pointer"
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-[#5EA4A4] rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 scale-90 group-hover:scale-100">
                        <svg className="w-7 h-7 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Text Content - Aligned to match image height */}
                <div className="xl:col-span-6 text-white flex flex-col justify-between py-1 lg:max-w-[760px] lg:mx-auto xl:max-w-none">
                  <div className="space-y-3">
                    <h3 className="text-base md:text-lg xl:text-xl font-bold leading-snug font-heading">{story.title}</h3>

                    <div className="space-y-2">
                      <p className="flex items-start gap-2">
                        <span className="font-bold whitespace-nowrap text-white text-xs md:text-sm tracking-wide">• Client :</span>
                        <span className="text-white/90 text-[12px] leading-[1.6] font-normal">{story.client}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="font-bold whitespace-nowrap text-white text-xs md:text-sm tracking-wide">• Location:</span>
                        <span className="text-white/90 text-xs md:text-sm leading-relaxed">{story.location}</span>
                      </p>
                      <div className="pt-1">
                        <p 
                          className="text-white/90 text-[12px] leading-[1.6] font-normal"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            textAlign: "justify",
                            textTransform: "capitalize",
                          }}
                        >
                          <span className="font-bold text-white mr-2 shadow-sm font-sans tracking-wide">• Project Overview:</span>
                          {story.overview}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center xl:justify-start pb-16 md:pb-0">
                    <WatchVideoButton 
                      onClick={() => window.open(story.link, "_blank", "noopener,noreferrer")}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Clustered Bottom Center for Mobile, Edges for Tablet/Desktop */}
          <button
            onClick={prev}
            className="absolute bottom-6 md:bottom-auto left-1/2 md:left-6 -translate-x-[calc(100%+8px)] md:-translate-x-0 md:top-1/2 md:-translate-y-1/2 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all z-20 backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute bottom-6 md:bottom-auto left-1/2 md:left-auto md:right-6 translate-x-[8px] md:translate-x-0 md:top-1/2 md:-translate-y-1/2 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all z-20 backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}


