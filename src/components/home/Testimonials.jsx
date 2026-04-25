import { useState } from 'react';
import { clsx } from 'clsx';
import { SectionHeading } from '../common';
import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

const testimonialsData = [
  {
    id: 1,
    quote:
      "We work closely with organizations to craft authentic visual stories that connect, inspire, and create meaningful impact. \nTheir ability to capture real stories from the ground is exceptional. The final output was not just a film, but a powerful narrative that moved people.",
    name: "Rohit Deshmukh",
    title: "Program Director, TATA Trusts",
    image: testimonial1,
  },
  {
    id: 2,
    quote:
      "From concept to execution, the team was incredibly professional. They understood our vision and transformed it into compelling visual storytelling.\nThe photography and films created by Vispera Studios helped us build a stronger emotional connection with our audience and stakeholders.",
    name: "Anjali Kulkarni",
    title: "Communication Head, Lokatmika Fondation",
    image: testimonial2,
  },
];

export default function Testimonials({
  testimonials = testimonialsData,
  className,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className={clsx('pb-8 md:pb-10 lg:pb-28 pt-0 overflow-hidden', className)} style={{ backgroundColor: '#F3F0EF' }}>
      <div className="w-full">
        {/* Section Heading - Mobile */}
        <div className="lg:hidden mb-6 md:mb-8 px-6">
          <SectionHeading
            subtitle="TESTIMONIALS"
            title="What Our Clients Say"
            align="center"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-stretch">

          {/* Left Side - Identity Card (Starts from left edge) */}
          <div className="hidden lg:flex lg:w-[30%] bg-primary text-white rounded-r-[2rem] lg:rounded-l-none p-10 lg:pl-16 flex-col justify-center relative overflow-hidden shadow-2xl">


            <div className="relative mb-3">
              <SectionHeading
                subtitle="TESTIMONIALS"
                title="What Our Clients Say"
                align="left"
                className="[&_p]:text-secondary [&_h2]:text-white [&_h2]:text-2xl [&_h2]:lg:text-4xl [&_h2]:mb-0 relative z-10"
              />
              <div
                className="absolute top-4 left-[220px] md:left-[260px] lg:left-[320px] w-12 h-12 z-0 pointer-events-none"
                style={{
                  filter: "invert(61%) sepia(39%) saturate(420%) hue-rotate(131deg) brightness(150%) contrast(87%)",
                  opacity: 2
                }}
              >
                <img src={headingBg} alt="" className="w-full h-full object-contain" />
              </div>
            </div>
            <p
              className="text-white text-sm leading-5 opacity-90 font-medium tracking-[0.02em] text-justify"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We Work Closely With Organizations To Craft Authentic Visual Stories That Connect, Inspire, And Create Meaningful Impact.
            </p>
          </div>

          {/* Right Side - Interactive Carousel (Desktop/Tablet) */}
          <div className="hidden md:block w-full lg:w-2/3 relative pr-6 md:pr-8 lg:pr-12">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-8 items-center h-full">

              {/* Image Box with Floating Overlap */}
              <div className="relative flex-shrink-0">
                {/* Decorative Teal Box */}
                <div className="bg-secondary rounded-[1.5rem] relative w-36 h-64 md:w-44 md:h-72 lg:w-52 lg:h-80 shadow-lg">
                  {/* Actual Photo Card - Overlapping to the right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-40 h-40 md:w-44 md:h-44 lg:w-54 lg:h-54">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full rounded-[1.25rem] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                    />

                  </div>
                </div>

                {/* Vertical Navigation Arrows (Snug to the Left) */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                  <button
                    onClick={handlePrevSlide}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/30 hover:bg-white text-primary rounded-full flex items-center justify-center transition-all shadow-lg backdrop-blur-md border border-white/40 group"
                  >
                    <ChevronLeftIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/30 hover:bg-white text-primary rounded-full flex items-center justify-center transition-all shadow-lg backdrop-blur-md border border-white/40 group"
                  >
                    <ChevronRightIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Textual Content Section */}
              <div className="flex-1 pl-4 md:pl-16 lg:pl-32 pr-6 md:pr-8 lg:pr-12">
                <p
                  className="text-primary text-sm leading-5 mb-10 font-medium text-justify tracking-[0.02em] max-w-[520px] whitespace-pre-line"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {currentTestimonial.quote}
                </p>

                <div className="flex items-center gap-5">
                  {/* Quote Icon Square Beside Author */}
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-primary text-lg md:text-xl font-bold tracking-tight">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-secondary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mt-1">
                      {currentTestimonial.title}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile View - Figma Match */}
          <div className="md:hidden w-full px-4">
            <div className="bg-[#66a9a9] rounded-2xl p-[17px] relative flex flex-col shadow-xl overflow-hidden mt-6">
              {/* Identity header - side by side format */}
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="object-cover shadow-lg"
                    style={{
                      width: '130px',
                      height: '98px',
                      borderRadius: '12px'
                    }}
                  />
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-white text-[16px] font-bold leading-tight uppercase tracking-wide">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-white/90 text-[10px] font-bold tracking-[0.1em] uppercase mt-2 leading-relaxed">
                    {currentTestimonial.title}
                  </p>
                </div>
              </div>

              {/* Text block - Full width below */}
              <p
                className="text-white text-sm leading-5 font-medium mb-10 text-justify tracking-[0.02em]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {currentTestimonial.quote}
              </p>

              {/* Navigation */}
              <div className="flex flex-col items-center gap-4">
                {/* Arrows */}
                <div className="flex items-center gap-5">
                  <button onClick={handlePrevSlide} className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 bg-white/10 hover:bg-white hover:text-[#5EA4A4] active:scale-95 transition-all">
                    <ChevronLeftIcon className="w-5 h-5 ml-0.5" />
                  </button>
                  <button onClick={handleNextSlide} className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 bg-white/10 hover:bg-white hover:text-[#5EA4A4] active:scale-95 transition-all">
                    <ChevronRightIcon className="w-5 h-5 mr-0.5" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-[5px] h-[5px] rounded-full transition-colors ${currentIndex === idx ? 'bg-[#0A374C]' : 'bg-[#0A374C]/30'
                        }`}
                    />
                  ))}
                  {/* Figma screenshot shows 3 dots but array has 2, rendering 3rd fake dot for fidelity */}
                  <div className="w-[5px] h-[5px] rounded-full bg-[#0A374C]/30 hidden data-fid-three-dots:block" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Minimal Icon helpers
function ChevronLeftIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
