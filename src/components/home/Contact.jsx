import { motion } from "framer-motion";
import contactImg from "../../assets/images/contact/contactus.png";
import sectionBg from "../../assets/images/our-client-bg.png";
import headingBg from "../../assets/images/decoration-heading-bg.svg";

export default function Contact() {
  return (
    <section id="contact" className="py-8 md:py-12 relative overflow-hidden" style={{ 
      backgroundImage: `url(${sectionBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="w-full px-4 sm:px-12 md:px-16 lg:px-24 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-end">

          {/* ── COL 1: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:col-span-1 lg:col-span-1 order-2 md:order-1"
          >
            <div className="mb-6 h-[140px] flex flex-col justify-end w-full max-w-[340px]">
              <p className="text-[#5EA4A4] text-sm font-semibold tracking-widest uppercase mb-1 text-center sm:text-left">
                Always Here to Connect
              </p>
              <h2 className="text-3xl lg:text-[2.25rem] font-bold text-[#0A374C] font-heading leading-tight text-center sm:text-left">
                Let's Tell Your Story
              </h2>
              <p className="text-[#555] text-sm leading-relaxed mt-4 text-center sm:text-left">
                We're here to understand your vision and help you bring meaningful stories to life.
                Reach out to collaborate or start your project.
              </p>
            </div>

            {/* Info card (Quick Contact) */}
            <div
              className="rounded-[2rem] p-4 sm:p-6 space-y-2 lg:space-y-1.5 xl:space-y-2 border-2 border-[#5EA4A4] shadow-sm flex flex-col justify-between w-full md:w-[340px] lg:w-[280px] xl:w-[340px]"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                height: "330px"
              }}
            >
              {/* Phone */}
              <div>
                <p className="text-[#0A374C] font-bold text-base mb-1">Quick Contact</p>
                <div className="flex items-center gap-3 lg:gap-2.5 xl:gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A374C] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[#5EA4A4] text-[10px] font-bold uppercase tracking-widest leading-tight">Main Office</p>
                    <p className="text-[#0A374C] text-xs font-bold break-words leading-tight mt-0.5">+91 9767346346</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-1.5 lg:pt-1 xl:pt-1.5">
                <p className="text-[#0A374C] font-bold text-base mb-1">Email</p>
                <div className="flex items-center gap-3 lg:gap-2.5 xl:gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A374C] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[#5EA4A4] text-[10px] font-bold uppercase tracking-widest leading-tight">Mail to</p>
                    <p className="text-[#0A374C] text-xs font-bold break-all leading-tight mt-0.5">contact@visperastudios.in</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-1.5 lg:pt-1 xl:pt-1.5">
                <p className="text-[#0A374C] font-bold text-base mb-1">Address</p>
                <div className="flex items-start gap-3 lg:gap-2.5 xl:gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A374C] flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[#5EA4A4] text-[10px] font-bold uppercase tracking-widest leading-tight">Our Office</p>
                    <p className="text-[#0A374C] text-xs font-bold leading-tight break-words mt-0.5">
                      Art Construction Ro.Ho. 08, Veer Savarkar Nagar, Sinnar, Maharashtra, 422103
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── COL 2: Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:col-span-1 lg:col-span-1 order-1 md:order-2"
          >
            <div className="relative rounded-[2rem] overflow-hidden w-full max-w-[220px] md:max-w-[260px] lg:max-w-[270px] xl:max-w-[300px]" style={{ height: "440px" }}>
              <img
                src={contactImg}
                alt="Contact Vispera Studios"
                className="w-full h-full object-cover object-center z-10"
              />
            </div>
          </motion.div>

          {/* ── COL 3: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center md:col-span-2 lg:col-span-1 order-3"
          >
            <div className="mb-6 mt-8 md:mt-0 h-[140px] flex flex-col justify-end w-full max-w-[340px] md:hidden lg:flex">
              <p className="text-[#5EA4A4] text-sm font-semibold tracking-widest uppercase mb-1 text-center sm:text-left">
                Start a Conversation
              </p>
              <h2 className="text-3xl lg:text-[2.25rem] font-bold text-[#0A374C] font-heading leading-tight text-center sm:text-left">
                Let's Work Together
              </h2>
              <p className="text-[#555] text-sm leading-relaxed mt-4 text-center sm:text-left">
                Tell us about your project, idea, or story - we'd love to collaborate with you
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-[2rem] overflow-hidden border-2 border-[#5EA4A4] shadow-sm flex flex-col w-full md:max-w-full lg:w-[340px]"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                height: "330px"
              }}
            >
              <div className="flex-1">
                {[
                  { icon: "user", placeholder: "Your Name*" },
                  { icon: "mail", placeholder: "Email Address*" },
                  { icon: "phone", placeholder: "Mobile Number*" },
                  { icon: "file", placeholder: "Subject*" },
                ].map(({ icon, placeholder }, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4 px-4 sm:px-8 py-3 border-b border-gray-100">
                    <FieldIcon type={icon} />
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full text-[15px] text-[#0A374C] font-semibold placeholder-gray-400 focus:outline-none bg-transparent"
                    />
                  </div>
                ))}

                <div className="flex items-start gap-3 sm:gap-4 px-4 sm:px-8 py-2 border-b border-gray-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" className="w-5 h-5 mt-0.5 shrink-0">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  <textarea
                    rows={2}
                    placeholder="Your Message..."
                    className="w-full text-[15px] text-[#0A374C] font-semibold placeholder-gray-400 focus:outline-none bg-transparent resize-none"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-6 flex justify-start">
                <button
                  type="submit"
                  className="bg-[#5EA4A4] hover:bg-[#0A374C] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-8 rounded-l shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FieldIcon({ type }) {
  const cls = "w-4 h-4 shrink-0";
  const s = "#9ca3af";
  if (type === "user") return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
  if (type === "mail") return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
  if (type === "phone") return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  );
}
