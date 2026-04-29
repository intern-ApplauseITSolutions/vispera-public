import { motion } from "framer-motion";
import rewardFrame from "../../assets/images/frame-reward.png";
import rewardBg from "../../assets/images/reward.png";
import badge1 from "../../assets/images/award-badge1.png";
import badge2 from "../../assets/images/award-badge2.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

const awards = [
  {
    id: 1,
    icon: badge1,
    title: "1st Prize In Atal Bhujal Best Informative Films",
  },
  {
    id: 2,
    icon: badge2,
    title: "Award For State Government's Best Covid-19 Awareness Video",
  },
  {
    id: 3,
    icon: badge2,
    title: "Employee Of The Year – Content Creation Award, Yuva Mitra",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="bg-bg-light overflow-hidden py-6 md:py-10">
      {/* Header - Optimized for Mobile/Desktop Typography */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-6 md:mb-8">
        <div className="flex flex-col items-center relative">
          <p
            className="text-[#5EA4A4] w-full text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "24px",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.1em"
            }}
          >
            AWARDS
          </p>
          <div className="relative w-full sm:w-auto max-w-[280px] sm:max-w-none sm:inline-block mt-[-4px] md:mt-[-8px] px-4 sm:px-0">
            <h2
              className="text-[#0A374C] relative z-10 text-center text-[24px] sm:text-[28px] md:text-[32px] leading-[30px] sm:leading-[38px] md:leading-[42px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                letterSpacing: "0.02em",
                textAlign: "center"
              }}
            >
              Recognized for Our Work
            </h2>
            <div className="absolute top-0 right-2 sm:-right-5 w-7 h-7 opacity-80 z-0 pointer-events-none">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* The Awards Container - Dark Blue Rectangle */}
      <div
        className="w-full bg-[#0A374C] py-6 md:py-8 relative group"
        style={{
          backgroundImage: `url(${rewardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

            {/* Award Illustration/Frame - Left on Desktop, Bottom on Mobile/Tab */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 max-w-[626px] order-2 lg:order-1 mt-8 lg:mt-0"
            >
              <div className="relative w-full aspect-[626/352] transform hover:scale-[1.01] transition-transform duration-700">
                <img
                  src={rewardFrame}
                  alt="Vispera Awards Showcase"
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </div>
            </motion.div>

            {/* Trophy Cards Section - Right on Desktop, Top on Mobile/Tab */}
            <div className="flex flex-col md:flex-row lg:flex-nowrap justify-center gap-12 md:gap-4 lg:gap-6 items-center w-full lg:w-3/5 order-1 lg:order-2 md:mt-[10px] lg:mt-0 px-2 lg:px-0">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative bg-[#5EA4A4] border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center group transition-all w-full max-w-[344px] h-[140px] md:w-[203px] md:h-[140px] shrink-0 cursor-pointer"
                  style={{
                    borderRadius: "12px"
                  }}
                >
                  {/* Overlapping Badge */}
                  <motion.div 
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-[5px] border-[#0A374C] transition-transform z-10 p-2"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <img src={award.icon} alt="Award Badge" className="w-full h-full object-contain" />
                  </motion.div>

                  <p
                    className="text-white text-center px-4"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: award.id === 2 ? "20px" : "18px",
                      textTransform: "capitalize",
                      marginTop: "5px"
                    }}
                  >
                    {award.title}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
