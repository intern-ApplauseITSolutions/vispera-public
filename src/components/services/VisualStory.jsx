import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Button from "../common/Button";
import CTA from "../home/CTA";

// Header image
import headerImg from "../../assets/images/services heading banner/1st service.jpg";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

// Service images
import img1 from "../../assets/images/Service1/img1.png";
import img2 from "../../assets/images/Service1/img2.png";
import img3 from "../../assets/images/Service1/img3.png";
import img4 from "../../assets/images/Service1/img4.png";
import img5 from "../../assets/images/Service1/img5.png";
import img6 from "../../assets/images/Service1/img6.png";
import img7 from "../../assets/images/Service1/img7.png";
import img8 from "../../assets/images/Service1/img8.png";
import img9 from "../../assets/images/Service1/img9.png";
import img10 from "../../assets/images/Service1/img10.jpg";

// Service card images
import s2 from "../../assets/images/service2-illustration.png";
import s3 from "../../assets/images/service3-illustration.png";
import s4 from "../../assets/images/service4-illustration.png";
import s5 from "../../assets/images/service5-illustration.png";
import s6 from "../../assets/images/service6-illustration.png";

const remainingServices = [
  { id: 2, title: "PHOTOGRAPHY AND BRAND IMAGING", img: s2 },
  { id: 3, title: "SOCIAL MEDIA STRATEGY AND MANAGEMENT", img: s3 },
  { id: 4, title: "WEBSITE DEVELOPMENT & DIGITAL PRESENCE BUILDING", img: s4 },
  { id: 5, title: "CREATIVE GRAPHIC DESIGN AND BRAND IDENTITY", img: s5 },
  { id: 6, title: "DIGITAL MARKETING AND CONTENT STRATEGY", img: s6 },
];

const galleryImages = [
  { id: 1, img: img1, label: "Documentary" },
  { id: 2, img: img2, label: "Corporate Film" },
  { id: 3, img: img3, label: "Educational Film" },
  { id: 4, img: img4, label: "" },
  { id: 5, img: img5, label: "" },
  { id: 6, img: img6, label: "" },
  { id: 7, img: img7, label: "" },
  { id: 8, img: img8, label: "" },
  { id: 9, img: img9, label: "" },
  { id: 10, img: img10, label: "" },
];

export default function VisualStory() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative h-48 sm:h-56 md:h-72 lg:h-80 overflow-hidden">
        <img
          src={headerImg}
          alt="Visual Storytelling"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A374C]/90 via-[#0A374C]/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[240px] sm:max-w-xs pl-4 sm:pl-6 md:pl-8 pt-4 sm:pt-0"
            >
              <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                Visual Storytelling and Content Production
              </h1>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-white/90 leading-relaxed">
                We create films, documentaries, and visual content that capture real stories with
                authenticity and impact. From on-ground documentation to branded storytelling, our work
                is designed to connect with people and communicate meaningfully.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <button
          onClick={() => navigate("/services")}
          className="flex items-center gap-2 text-[#5EA4A4] hover:text-[#4D9090] font-semibold transition-colors text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          Back to services
        </button>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-0 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img1}
              alt="Gallery 1"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A374C]/80 to-transparent flex items-end p-4">
              <span className="text-white font-semibold text-sm"></span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img2}
              alt="Gallery 2"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A374C]/80 to-transparent flex items-end p-4">
              <span className="text-white font-semibold text-sm"></span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img3}
              alt="Gallery 3"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A374C]/80 to-transparent flex items-end p-4">
              <span className="text-white font-semibold text-sm"></span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img4}
              alt="Gallery 4"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A374C]/80 to-transparent flex items-end p-4">
              <span className="text-white font-semibold text-sm"></span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img5}
              alt="Gallery 5"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A374C]/80 to-transparent flex items-end p-4">
              <span className="text-white font-semibold text-sm"></span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img6}
              alt="Gallery 6"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A374C]/80 to-transparent flex items-end p-4">
              <span className="text-white font-semibold text-sm"></span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img7}
              alt="Gallery 7"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img8}
              alt="Gallery 8"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img9}
              alt="Gallery 9"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="relative group overflow-hidden rounded-lg break-inside-avoid mb-0 sm:mb-4"
          >
            <img
              src={img10}
              alt="Gallery 10"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>

      {/* Explore Our Work Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="flex justify-center">
          <Button
            onClick={() => navigate("/our-work")}
            className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#5EA4A4]/20 uppercase text-xs tracking-[0.2em]"
          >
            Explore Our Work
          </Button>
        </div>
      </div>

      {/* More Services Section */}
      <div className="bg-[#F7F5F2] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 relative pl-4 sm:pl-6 md:pl-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A374C] mb-4 relative z-10"
            >
              More Services to Explore
            </motion.h2>
            <div className="absolute -top-2 sm:-top-3 right-1/2 translate-x-36 sm:translate-x-44 md:translate-x-52 w-8 sm:w-10 h-8 sm:h-10 opacity-70 z-0">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {remainingServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (service.id === 2) navigate("/services/branding");
                  else if (service.id === 3) navigate("/services/social-media");
                  else if (service.id === 4) navigate("/services/web-development");
                  else if (service.id === 5) navigate("/services/graphic-design");
                  else if (service.id === 6) navigate("/services/digital-marketing");
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
