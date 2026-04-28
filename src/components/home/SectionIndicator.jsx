import { useState, useEffect } from "react";
import { clsx } from "clsx";

const sections = [
  { label: "INTRO", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "OUR WORK", href: "#work" },
  { label: "FEATURED IMPACT", href: "#impact" },
  { label: "OUR SERVICES", href: "#services" },
  { label: "OUR CLIENTS", href: "#clients" },
  { label: "AWARDS", href: "#awards" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CONTACT US", href: "#contact" },
];

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("INTRO");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-90px 0px -70% 0px", // Account for sticky navbar + subnav
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id") || "intro";
          const section = sections.find(s =>
            s.href === `#${sectionId}` || (s.label === "INTRO" && sectionId === "intro")
          );
          if (section) setActiveSection(section.label);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe sections
    const sectionIds = ["about", "work", "impact", "services", "clients", "awards", "testimonials", "contact"];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 88; // navbar height
      const indicatorHeight = 8; // section indicator height
      const offset = navbarHeight + indicatorHeight + 20; // extra 20px padding
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="sticky top-[88px] z-40 w-full bg-transparent hidden lg:block relative">
      {/* Full-width line - outside the padding */}
      <div className="absolute left-0 right-0 top-[4px] h-[0.5px] bg-[#0A374C]/10" />
      
      {/* Dots container with padding */}
      <div className="w-full px-8 md:px-16">
        <div className="relative flex items-start justify-between w-full">
          {sections.map((section, i) => (
            <a
              key={i}
              href={section.href}
              onClick={(e) => handleClick(e, section.href)}
              className="relative z-10 flex flex-col items-center gap-1 group cursor-pointer"
            >
              {/* Dot positioned on top of the line */}
              <div className={clsx(
                "rounded-full transition-all duration-300 relative w-2 h-2",
                activeSection === section.label
                  ? "bg-[#5EA4A4]"
                  : "bg-gray-200 group-hover:bg-[#5EA4A4]"
              )} />

              {/* Label below dot */}
              <span className={clsx(
                "text-[10px] uppercase tracking-widest transition-all duration-300 whitespace-nowrap",
                "text-[#0A374C] opacity-0 group-hover:opacity-100"
              )}>
                {section.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
