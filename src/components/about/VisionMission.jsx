import { motion } from "framer-motion";
import visionImg from "../../assets/images/ourvision.png";
import missionImg from "../../assets/images/ourmission.png";
import sectionBg from "../../assets/images/our-client-bg.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

export default function VisionMission() {
  return (
    <section 
      className="py-0" 
      style={{ 
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: "#F7F5F2" 
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:min-h-[307px] items-start">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group w-full"
          >
            <div className="relative mb-0">
              {/* Branding Blob Background */}
              <div className="absolute inset-0 bg-[#e0f1f1] rounded-full filter blur-2xl opacity-60 scale-150 -z-10 group-hover:scale-175 transition-transform duration-700" />
              <div className="relative z-10 w-48 h-48 lg:w-[220px] lg:h-[220px]">
                <img src={visionImg} alt="Our Vision layout graphic" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
            </div>
            
            <div className="relative inline-block mb-3 -mt-6 lg:-mt-10">
              <h3 className="relative z-10 text-xl lg:text-[22px] font-bold uppercase tracking-[0.25em] font-heading">
                <span className="text-[#0A374C]">OUR</span> <span className="text-[#5EA4A4]">VISION</span>
              </h3>
              <div className="absolute -right-3 -top-1.5 w-7 h-7 opacity-100 pointer-events-none z-0">
                <img src={headingBg} alt="" className="w-full h-full object-contain" />
              </div>
            </div>
            
            {/* Exactly 538px bounding width text block */}
            <p className="text-[#0A374C]/80 text-[15px] lg:text-[16px] leading-[24px] max-w-[538px] w-full font-body font-medium capitalize">
              Our vision is to empower brands, startups, businesses, and social organizations by bringing their stories to life through creativity, authenticity, and innovation.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center group w-full"
          >
            <div className="relative mb-0">
              <div className="absolute inset-0 bg-[#e0f1f1] rounded-full filter blur-2xl opacity-60 scale-150 -z-10 group-hover:scale-175 transition-transform duration-700" />
              <div className="relative z-10 w-48 h-48 lg:w-[220px] lg:h-[220px]">
                <img src={missionImg} alt="Our Mission layout graphic" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
            </div>

            <div className="relative inline-block mb-3 -mt-6 lg:-mt-10">
              <h3 className="relative z-10 text-xl lg:text-[22px] font-bold uppercase tracking-[0.25em] font-heading">
                <span className="text-[#0A374C]">OUR</span> <span className="text-[#5EA4A4]">MISSION</span>
              </h3>
              <div className="absolute -right-3 -top-1.5 w-7 h-7 opacity-100 pointer-events-none z-0">
                <img src={headingBg} alt="" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Exactly 538px bounding width text block */}
            <p className="text-[#0A374C]/80 text-[15px] lg:text-[15px] leading-[24px] max-w-[538px] w-full font-body font-medium capitalize">
              Our mission is to use our expertise in storytelling, videography, photography, digital design, and content marketing to help brands and organizations craft authentic narratives that inspire and engage.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
