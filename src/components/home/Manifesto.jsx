import React from "react";
import illustrationImg from "../../assets/images/quote-img-2.png";
import personImg from "../../assets/images/quote-img-1.png";

export default function Manifesto() {
  return (
    <section className="py-6 bg-bg-light">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-0">
        
        <div className="relative flex items-center justify-start md:justify-between 
          bg-[#d9f3f2] 
          border-[6px] md:border-[5px] border-[#0A374C] md:border-[#0b3f3b] 
          rounded-[12px] md:rounded-[20px] 
          px-2 md:px-10 lg:px-14 
          h-[150px] md:h-[140px] lg:h-[180px]
          overflow-visible
          w-full max-w-[350px] md:max-w-none mx-auto
        ">

          {/* LEFT IMAGE - Hidden on Tab/Mobile */}
          <div className="hidden lg:flex w-[20%] h-full justify-start items-end pointer-events-none relative">
            <img
              src={illustrationImg}
              alt="Illustration"
              className="absolute bottom-0 left-0 h-[120%] lg:h-[130%] object-contain object-bottom translate-y-[2px]"
            />
          </div>

          {/* TEXT */}
          <div className="w-[55%] md:w-auto md:flex-1 lg:flex-none lg:w-[60%] text-center md:px-8 z-20 relative shrink-0">
            <h2 className="text-[#0A374C] 
              font-bold 
              text-[11px] sm:text-[200px] md:text-sm lg:text-[20px] 
              leading-[18px] sm:leading-[24px] md:leading-[1.6]
              tracking-[0.01em] md:tracking-wide 
              uppercase
              font-heading
            ">
              "We design<br className="block md:hidden"/> experiences, not<br className="block md:hidden"/> just websites. We<br className="block md:hidden"/> craft stories, not<br className="block md:hidden"/> just videos. We<br className="block md:hidden"/> build brands that<br className="block md:hidden"/> move people."
            </h2>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute right-[-6px] bottom-[-6px] md:relative md:right-auto md:bottom-0 w-[180px] sm:w-[220px] md:w-[25%] lg:w-[20%] h-[200px] sm:h-[245px] md:h-full pointer-events-none z-10 shrink-0">
            <img
              src={personImg}
              alt="Photographer"
              className="absolute bottom-0 right-0 md:right-4 lg:right-[-20px] w-full h-full md:w-auto md:h-[145%] lg:h-[150%] object-contain object-right-bottom md:object-cover max-w-none origin-bottom-right transition-transform translate-x-2 md:translate-x-0 lg:translate-x-4"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
