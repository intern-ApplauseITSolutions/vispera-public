import { motion } from "framer-motion";
import leftImg from "../../assets/images/Group-39917.png";

export default function AboutIntro() {
  return (
    <section className="py-8 md:py-12 overflow-hidden" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">

        {/* Tablet/Desktop: Side-by-Side | Mobile: Stacked */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-center gap-8 md:gap-16">

          {/* Left: Floating Circular Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[280px] md:max-w-[380px] lg:max-w-[460px] shrink-0"
          >
            {/* Artistic blob background */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #5EA4A4 0%, transparent 70%)",
                filter: "blur(40px)",
                borderRadius: "50%"
              }}
            />

            <img
              src={leftImg}
              alt="Creative workspace"
              className="relative z-10 w-full h-auto object-contain"
            />
          </motion.div>

          {/* Right: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col text-center md:text-left pt-2 md:pt-4 md:justify-between"
          >
            <div>
              <h2
                className="font-heading font-bold leading-tight mb-4 md:mb-5"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "#0A374C" }}
              >
                " We believe every story <br className="hidden xl:block" />
                <span className="text-[#5EA4A4]">deserves to be told "</span>
              </h2>

              <div className="space-y-2 md:space-y-3 max-w-xl mx-auto md:mx-0">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#0A374C] font-semibold">
                  Welcome To <span className="text-[#0A374C]">Vispera Studios Private Limited</span>, <span className="font-normal text-[#0A374C]/80">Where Ideas Transform Into Powerful Stories.</span>
                </p>

                <p className="text-[12px] md:text-[13px] lg:text-sm leading-relaxed text-[#0A374C]/60 font-medium">
                  We Are A Passionate Team Of Storytellers, Filmmakers, Designers, And Digital Experts, Helping Startups, Businesses, And Organizations Craft Their Digital Identity Through Stunning Visuals And Authentic Narratives.
                </p>
              </div>
            </div>

            {/* Button removed as per user request for About page visibility */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
