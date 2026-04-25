import { motion } from "framer-motion";
import contactImg from "../../assets/images/contact-us-img.png";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 md:py-20" style={{ backgroundColor: "#F5F3EF" }}>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* COL 1 — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#5EA4A4] text-xs font-semibold tracking-widest uppercase mb-1">
              Always Here to Connect
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A374C] mb-3 italic">
              Let's Tell Your Story
            </h2>
            <p className="text-[#555] text-sm leading-relaxed mb-6">
              We're here to understand your vision and help you bring meaningful stories to life.
              Reach out to collaborate or start your project.
            </p>

            <div className="rounded-xl p-5 space-y-5" style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}>
              {/* Phone */}
              <div>
                <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Quick Contact</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0A374C] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#5EA4A4] text-xs font-semibold uppercase tracking-wide">Main Office</p>
                    <p className="text-[#1a1a1a] text-sm font-semibold">+91 9767346346</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Email</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0A374C] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#5EA4A4] text-xs font-semibold uppercase tracking-wide">Mail to</p>
                    <p className="text-[#1a1a1a] text-sm font-semibold">contact@visperastudios.in</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Address</p>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0A374C] flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#5EA4A4] text-xs font-semibold uppercase tracking-wide">Our Office</p>
                    <p className="text-[#1a1a1a] text-sm font-semibold leading-relaxed">
                      Art Construction Ro.Ho. 08, Veer Savarkar Nagar, Sinnar, Maharashtra, 422103
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COL 2 — Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-stretch justify-center"
          >
            <div className="rounded-2xl overflow-hidden w-full max-w-[360px]"
              style={{ backgroundColor: "#e8e4dc", border: "1px solid #ddd" }}>
              <img
                src={contactImg}
                alt="Contact Vispera Studios"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "420px" }}
              />
            </div>
          </motion.div>

          {/* COL 3 — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-[#5EA4A4] text-xs font-semibold tracking-widest uppercase mb-1">
              Start a Conversation
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A374C] mb-3 italic">
              Let's Work Together
            </h2>
            <p className="text-[#555] text-sm leading-relaxed mb-5">
              Tell us about your project, idea, or story - we'd love to collaborate with you
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
            >
              {[
                { icon: "user",  placeholder: "Your Name*" },
                { icon: "mail",  placeholder: "Email Address*" },
                { icon: "phone", placeholder: "Mobile Number*" },
                { icon: "file",  placeholder: "Subject*" },
              ].map(({ icon, placeholder }, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
                  <FieldIcon type={icon} />
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none bg-transparent"
                  />
                </div>
              ))}

              <div className="flex items-start gap-3 px-4 py-3.5 border-b border-gray-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" className="w-4 h-4 mt-0.5 shrink-0">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                <textarea
                  rows={3}
                  placeholder="Message"
                  className="w-full text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none bg-transparent resize-none"
                />
              </div>

              <div className="p-4">
                <button
                  type="submit"
                  className="w-full text-white font-semibold text-sm py-3 rounded-lg transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#5EA4A4" }}
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
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
  if (type === "mail") return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
  if (type === "phone") return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.5" className={cls}>
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  );
}
