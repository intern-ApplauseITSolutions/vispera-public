import { motion } from "framer-motion";
import { StartProjectButton } from "../common";
import ctaBg from "../../assets/images/start-your-project-img.png";
import ctaBgTablet from "../../assets/images/cta.png";
import cameraIllustration from "../../assets/images/about-us-camera.png";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Ready to tell your story? Desktop"
          className="w-full h-full object-cover hidden lg:block"
        />
        <img
          src={ctaBgTablet}
          alt="Ready to tell your story? Tablet"
          className="w-full h-full object-cover hidden md:block lg:hidden"
        />
        <img
          src={ctaBg}
          alt="Ready to tell your story? Mobile"
          className="w-full h-full object-cover block md:hidden"
        />
        {/* Black Transparent Layer */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="w-full relative z-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center md:items-start text-center gap-3 md:gap-2 lg:ml-12 xl:ml-20">
          
          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4 lg:space-y-6 flex flex-col items-center text-center"
          >
            <div className="relative inline-block mt-8 md:mt-2">
              {/* Camera Illustration Area */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -top-10 -left-2 md:-top-12 md:-left-4 pointer-events-none z-0"
              >
                <img 
                  src={cameraIllustration} 
                  alt="" 
                  className="w-12 md:w-16 lg:w-20 h-auto object-contain brightness-0 invert opacity-90" 
                />
              </motion.div>

              <h2 className="text-3xl md:text-[40px] lg:text-3xl font-bold text-white font-heading leading-tight drop-shadow-md relative z-10 mx-auto w-fit">
                Ready to tell your story?
              </h2>
            </div>
            
            <p className="text-white/80 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-lg">
              Whether you have a fully formed brief or just the seed of an idea, 
              we'd love to hear from you.
            </p>

            <div className="pt-2 md:pt-4 w-full flex justify-center">
              <StartProjectButton />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
