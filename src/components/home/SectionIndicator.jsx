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

  return (
    <div className="sticky top-[88px] z-40 w-full bg-transparent hidden lg:block">
      <div className="w-full px-8 md:px-16 py-6">
        <div className="relative flex items-end justify-between w-full">
          {/* Subtle Progress Line */}
          <div className="absolute inset-x-0 bottom-[6px] h-[0.5px] bg-[#0A374C]/10 w-full" />

          {sections.map((section, i) => (
            <a
              key={i}
              href={section.href}
              className="relative z-10 flex flex-col items-center gap-2 group"
            >
              <div className={clsx(
                "rounded-full transition-all duration-300",
                activeSection === section.label
                  ? "w-2.5 h-2.5 bg-[#5EA4A4] shadow-[0_0_10px_rgba(94,164,164,0.4)]"
                  : "w-2 h-2 bg-gray-200 group-hover:bg-[#5EA4A4]"
              )} />

              <span className={clsx(
                "text-sm uppercase tracking-widest transition-all duration-300",
                activeSection === section.label
                  ? "text-[#A7B0B5] opacity-100"
                  : "text-[#A7B0B5] opacity-0 group-hover:opacity-100"
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
