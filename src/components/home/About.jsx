import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import leftImg from "../../assets/images/Group-39917.png";
import rightImg from "../../assets/images/Group-39731.png";
import sectionBg from "../../assets/images/our-client-bg.png";
import aboutMobileImg from "../../assets/images/aboutMobile.png";
import aboutGroupImg from "../../assets/images/aboutGroup.png";

export default function About({ showButton = true }) {
  return (
    <section id="about" className="overflow-hidden relative py-4 md:py-6 lg:py-8" style={{
      backgroundImage: `url(${sectionBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="w-full relative z-10 pl-0 md:pl-6 lg:pl-10 pr-0">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4 lg:gap-0">

          {/* ── Left image (Circular Mask Illustration) ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[45%] lg:w-[38%] relative shrink-0 -ml-0 md:-ml-10 lg:-ml-12"
          >
            {/* Desktop / Tablet Image */}
            <div className="relative z-10 hidden md:block">
              <img
                src={leftImg}
                alt="Creative workspace visualization"
                className="w-full h-auto object-contain scale-90 md:scale-100"
              />
            </div>

            {/* Mobile Image Stack (Matches Figma) */}
            <div className="relative z-10 block md:hidden mb-4 mt-6 w-full px-4 text-center">
              <div className="relative inline-block w-full max-w-[280px] mx-auto">
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
                  <img src={aboutMobileImg} className="w-full h-full object-cover scale-110" alt="Vispera mobile workspace" />
                </div>
                <img src={aboutGroupImg} className="absolute -bottom-6 -left-2 w-28 object-contain z-20" alt="Clapboard" />
              </div>
            </div>
          </motion.div>

          {/* ── Center Content Area ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:flex-1 flex flex-col items-center justify-center text-center px-6 md:px-8 lg:px-12 z-20"
          >
            <div className="w-full flex flex-col items-center">

              {/* Unified Quote */}
              <div className="mb-4 md:mb-6 w-full">
                <p
                  className="text-[#0A374C]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "32px",
                    lineHeight: "42px",
                    textAlign: "center",
                    verticalAlign: "middle"
                  }}
                >
                  “ We believe every story <br />
                  <span className="text-[#5EA4A4]">deserves to be told ”</span>
                </p>
              </div>

              {/* Subheading & Description */}
              <div className="space-y-1 w-full max-w-[90%] md:max-w-full">
                <p
                  className="text-[#0A374C]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "24px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize"
                  }}
                >
                  Welcome to Vispera Studios Private Limited,
                </p>

                <p
                  className="text-[#0A374C]/80"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "24px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize"
                  }}
                >
                  where ideas transform into powerful stories. We are a passionate team of storytellers, filmmakers, designers, and digital experts, helping startups, businesses, and organizations craft their digital identity through stunning visuals and authentic narratives
                </p>
              </div>

              {showButton && (
                <div className="mt-6 md:mt-8">
                  <Link
                    to="/about"
                    className="px-12 py-3.5 bg-[#5EA4A4] text-white rounded-lg shadow-lg hover:bg-[#0A374C] transition-all transform hover:scale-105 active:scale-95 inline-block"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0",
                      textAlign: "center",
                      verticalAlign: "middle",
                      textTransform: "capitalize"
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              )}
            </div>
          </motion.div>

          {/* ── Right Placeholder for Balance ── */}
          <div className="hidden lg:block lg:w-[25%] pointer-events-none" />

        </div>
      </div>

      {/* Decorative Polaroid on far right - positioned absolutely but with a safe right gap */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="hidden xl:block absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 w-[220px] lg:w-[260px] pointer-events-none z-10"
      >
        <img
          src={rightImg}
          alt="Portfolio polaroid cards"
          className="w-full h-auto drop-shadow-xl opacity-95"
        />
      </motion.div>
    </section>
  );
}


