import { motion } from "framer-motion";
import aboutImg from "../../assets/images/about-us-2ndsection.png";

export default function AboutStrategy() {
  return (
    <section className="py-3 md:py-5" style={{ backgroundColor: "#F7F5F2" }}>
      <div className="max-w-[1550px] mx-auto px-6 md:px-8 lg:px-10 mt-12 mb-12">
        <div
          className="relative w-full lg:rounded-[12px] lg:px-16 lg:pt-6 lg:pb-0 lg:border-[5px] border-secondary/30 lg:shadow-md lg:bg-secondary/10 lg:min-h-[290px] flex items-center"
        >
          {/* Inner Content Wrapper */}
          <div className="relative z-10 flex flex-col md:flex-row lg:flex-row items-stretch lg:items-center justify-between w-full gap-6 md:gap-8 lg:gap-0">
            
            {/* Left narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 lg:flex-none lg:w-[36%] xl:w-[34%] text-center rounded-[12px] lg:rounded-none border-[3px] lg:border-0 border-secondary/30 lg:border-transparent bg-secondary/10 lg:bg-transparent shadow-md lg:shadow-none p-6 md:p-8 lg:p-0"
            >
              <h3 className="text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-bold text-[#0A374C] mb-3 font-heading capitalize">
                “Creative Strategy for the Digital Age”
              </h3>
              <p className="text-[#0A374C] font-body font-normal text-[14px] md:text-[15px] leading-[22px] md:leading-[24px]">
                In today’s fast-moving world, brands don’t just need presence -
                they need connection. From cinematic video production and
                website development to social media management and branding,
                Vispera Studios delivers strategic creative solutions that inspire
                engagement and drive growth.
              </p>
            </motion.div>

            {/* Center image — Severely Enlarged and Absolutely Floating */}
            <div className="hidden lg:block absolute left-1/2 bottom-[0px] -translate-x-1/2 z-20 pointer-events-none">
              <img
                src={aboutImg}
                alt="Photographer Sketch"
                className="w-[320px] xl:w-[250px] max-w-none object-contain origin-bottom drop-shadow-lg scale-110"
              />
            </div>

            {/* Right narrative */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 lg:flex-none lg:w-[36%] xl:w-[34%] text-center rounded-[12px] lg:rounded-none border-[3px] lg:border-0 border-secondary/30 lg:border-transparent bg-secondary/10 lg:bg-transparent shadow-md lg:shadow-none p-6 md:p-8 lg:p-0"
            >
              <h3 className="text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-bold text-[#0A374C] mb-3 font-heading capitalize">
                “Built on Passion, Powered by Excellence”
              </h3>
              <p className="text-[#0A374C] font-body font-normal text-[14px] md:text-[15px] leading-[22px] md:leading-[24px]">
                With years of experience and a relentless focus on detail, we
                bring clarity, creativity, and impact to every project. At Vispera
                Studios, every story we tell, every brand we build, and every
                idea we shape is fueled by purpose - and designed to leave a
                lasting impression.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
