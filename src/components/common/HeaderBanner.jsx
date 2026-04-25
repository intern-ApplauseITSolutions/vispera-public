import headerBg from "../../assets/images/header-bg.png";
import tabletHeaderBg from "../../assets/images/header/t_header-bg.png";
import mobileHeaderBg from "../../assets/images/header/m_header-bg.jpg";
 
export default function HeaderBanner({ title }) {
  return (
<section className="relative h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px] overflow-hidden">
      {/* Mobile background image */}
<img
        src={mobileHeaderBg}
        alt={title}
        className="absolute inset-0 w-full h-full object-fit object-center md:hidden"
      />
 
      {/* Tablet background image */}
<img
        src={tabletHeaderBg}
        alt={title}
        className="absolute inset-0 w-full h-full object-fit object-center hidden md:block lg:hidden"
      />
 
      {/* Desktop background image */}
<img
        src={headerBg}
        alt={title}
        className="absolute inset-0 w-full h-full object-fit object-center hidden lg:block"
      />
 
      {/* Clean Full-Bleed Image with High-Centered Title */}
<div className="absolute inset-x-0 top-1/2 -translate-y-[60%] flex items-center px-6 sm:px-10 md:px-14 lg:px-20 z-10">
<h1 className="text-white text-sm sm:text-base md:text-2xl lg:text-4xl font-bold font-heading drop-shadow-2xl ">
          {title}
</h1>
</div>
</section>
  );
}