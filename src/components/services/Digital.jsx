import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Button from "../common/Button";
import CTA from "../home/CTA";

// Header image
import headerImg from "../../assets/images/service6/header.jpg";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

// Service card images
import s1 from "../../assets/images/service1-illustration.png";
import s2 from "../../assets/images/service2-illustration.png";
import s3 from "../../assets/images/service3-illustration.png";
import s4 from "../../assets/images/service4-illustration.png";
import s5 from "../../assets/images/service5-illustration.png";

const remainingServices = [
  { id: 1, title: "VISUAL STORYTELLING AND CONTENT PRODUCTION", img: s1 },
  { id: 2, title: "PHOTOGRAPHY AND BRAND IMAGING", img: s2 },
  { id: 3, title: "SOCIAL MEDIA STRATEGY AND MANAGEMENT", img: s3 },
  { id: 4, title: "WEBSITE DEVELOPMENT & DIGITAL PRESENCE BUILDING", img: s4 },
  { id: 5, title: "CREATIVE GRAPHIC DESIGN AND BRAND IDENTITY", img: s5 },
];

export default function Digital() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative h-48 sm:h-56 md:h-72 lg:h-80 overflow-hidden">
        <img
          src={headerImg}
          alt="Digital Marketing And Content Strategy"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A374C]/90 via-[#0A374C]/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[240px] sm:max-w-xs pl-0 sm:pl-0 md:pl-0 pt-4 sm:pt-0"
            >
              <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                Digital Marketing And Content Strategy
              </h1>
              <p className="text-[10px] sm:text-[11px] md:text-sm text-white/90 leading-relaxed">
                We plan and execute digital marketing strategies that help brands reach the right
                audience and grow effectively. From ads to content and lead generation, our
                approach focuses on performance, clarity, and measurable impact.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 sm:py-8">
        <button
          onClick={() => navigate("/services")}
          className="flex items-center gap-2 text-[#5EA4A4] hover:text-[#4D9090] font-semibold transition-colors text-sm sm:text-base cursor-pointer"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          Back to services
        </button>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 pb-4 sm:pb-6">
        <div className="flex flex-col items-center justify-center py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A374C] mb-6">
              Coming Soon
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Explore Our Work Button */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 pb-12 sm:pb-16">
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/our-work")}
            className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#5EA4A4]/20 uppercase text-xs tracking-[0.2em] cursor-pointer"
          >
            Explore Our Work
          </Button>
        </div>
      </div>

      {/* More Services Section */}
      <div className="bg-[#F7F5F2] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-8 sm:mb-12 relative pl-0 sm:pl-0 md:pl-0">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#0A374C] mb-4 relative z-10"
            >
              More Services to Explore
            </motion.h2>
            <div className="absolute -top-2 sm:-top-3 right-1/2 translate-x-36 sm:translate-x-44 md:translate-x-52 w-8 sm:w-10 h-8 sm:h-10 opacity-70 z-0">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 sm:justify-center">
            {remainingServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (service.id === 1) navigate("/services/visual-story");
                  else if (service.id === 2) navigate("/services/branding");
                  else if (service.id === 3) navigate("/services/social-media");
                  else if (service.id === 4) navigate("/services/web-development");
                  else if (service.id === 5) navigate("/services/graphic-design");
                }}
                className="bg-white rounded-2xl p-3 sm:p-4 flex flex-col items-center gap-3 hover:shadow-md transition-shadow duration-300 cursor-pointer max-w-[240px] sm:max-w-none mx-auto"
                style={{ border: "1px solid #e8e4dc" }}
              >
                <div className="w-full h-20 sm:h-24 flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-center text-xs font-bold text-[#0A374C] uppercase leading-snug tracking-wide">
                  {service.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
