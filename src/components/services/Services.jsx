import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import s1 from "../../assets/images/service1-illustration.png";
import s2 from "../../assets/images/service2-illustration.png";
import s3 from "../../assets/images/service3-illustration.png";
import s4 from "../../assets/images/service4-illustration.png";
import s5 from "../../assets/images/service5-illustration.png";
import s6 from "../../assets/images/service6-illustration.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

const services = [
  { id: 1, title: "VISUAL STORYTELLING AND CONTENT PRODUCTION", img: s1, route: "/services/visual-story" },
  { id: 2, title: "PHOTOGRAPHY AND BRAND IMAGING", img: s2, route: "/services/branding" },
  { id: 3, title: "SOCIAL MEDIA STRATEGY AND MANAGEMENT", img: s3, route: "/services/social-media" },
  { id: 4, title: "WEBSITE DEVELOPMENT & DIGITAL PRESENCE BUILDING", img: s4, route: "/services/web-development" },
  { id: 5, title: "CREATIVE GRAPHIC DESIGN AND BRAND IDENTITY", img: s5, route: "/services/graphic-design" },
  { id: 6, title: "DIGITAL MARKETING AND CONTENT STRATEGY", img: s6, route: "/services/digital-marketing" },
];

export default function Services({ hideSubheading = false }) {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-2 md:py-4" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10">

        <div className="flex flex-col items-center mt-4 mb-10 md:mt-6 md:mb-10 lg:mt-8 lg:mb-10 relative">
          {!hideSubheading && (
          <p
            className="text-[#5EA4A4] font-semibold uppercase text-center align-middle text-[16px] leading-[42px] tracking-normal"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            OUR SERVICES
          </p>
          )}
          <div className="relative inline-block mt-[-8px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#0A374C] relative z-10 text-center"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "42px",
                letterSpacing: "0.02em",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              How We Help
            </motion.div>
            <div className="absolute top-0 -right-5 w-7 h-7 opacity-80 z-0 pointer-events-none">
              <img src={headingBg} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Row 1 — 4 cards in one line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-6">
          {services.slice(0, 4).map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 0.08} navigate={navigate} />
          ))}
        </div>

        {/* Row 2 — 2 cards (centered) */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 lg:gap-8">
          {services.slice(4, 6).map((s, i) => (
            <div key={s.id} className="w-full sm:w-1/2 lg:w-1/4">
              <ServiceCard service={s} delay={(i + 4) * 0.08} navigate={navigate} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, delay = 0, navigate }) {
  const handleClick = () => {
    if (service.route) {
      navigate(service.route);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-2xl p-3 sm:p-4 flex flex-col items-center gap-3 hover:shadow-md transition-shadow duration-300 cursor-pointer max-w-[240px] sm:max-w-[280px] lg:max-w-none mx-auto"
      style={{ border: "1px solid #e8e4dc" }}
      onClick={handleClick}
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
  );
}
