import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { StartProjectButton } from "../common";
import logo from "../../assets/images/transparent-logo.png";
import desktopFooter from "../../assets/images/Footer/dextopfooter.png";
import tabFooter from "../../assets/images/Tablet/footer.png";
import mobileFooter from "../../assets/images/Mobile/footer-mobile.png";
import footerScanner from "../../assets/images/qr.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
];

const contactInfo = {
  email: "contact@visperastudios.in",
  phone: "+91 9767346346",
  address: "Art Construction Ro.Ho. 08, Veer Savarkar Nagar, Sinnar, Maharashtra, 422103",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden font-inter" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style jsx>{`
        footer h1, footer h2, footer h3, footer h4, footer h5, footer h6 {
          font-family: 'Inter', sans-serif !important;
        }
      `}</style>

      {/* Wave shape SVG — sits on top of the section below */}
      <div style={{ backgroundColor: "#F7F5F2", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "60px", display: "block" }}
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="#0A374C"
          />
        </svg>
      </div>

      {/* Background image layer - Responsive */}
      <div
        className="sm:hidden absolute inset-0"
        style={{
          backgroundImage: `url(${mobileFooter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="hidden sm:block lg:hidden absolute inset-0"
        style={{
          backgroundImage: `url(${tabFooter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `url(${desktopFooter})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />



      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 sm:pt-14 md:pt-20 lg:pt-24 xl:pt-24 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:pt-16 gap-8 lg:gap-12">

          {/* Col 1 — Brand */}
          <div className="space-y-5">
            <div className="inline-block">
              <img src={logo} alt="Vispera Studios" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-white text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              We craft meaningful visual stories that inspire, connect, and
              create impact. From NGOs to purpose-driven brands, we bring
              stories to life through creativity and authenticity.
            </p>
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/company/vispera-studios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
                aria-label="Visit our LinkedIn page"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="space-y-5 lg:pt-2 sm:flex sm:flex-col sm:items-center lg:items-start md:mt-8 xl:ml-8">
            <h3 className="text-sm font-bold text-white tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5 sm:text-left lg:text-left">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2 sm:justify-start lg:justify-start">
                  <span className="text-white text-xs">•</span>
                  <Link
                    to={link.href}
                    className="text-white hover:text-white/80 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact Info */}
          <div className="space-y-5 lg:pt-2 md:mt-8">
            <h3 className="text-sm font-bold text-white tracking-widest">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <address className="text-white text-sm not-italic leading-relaxed">
                  {contactInfo.address}
                </address>
              </li>
            </ul>
          </div>

          {/* Col 4 — CTA + QR */}
          <div className="space-y-4 lg:pt-2 md:mt-6 flex flex-col items-start sm:items-center lg:items-center justify-start sm:justify-center lg:justify-center">
            <h3 className="text-base font-bold text-white">Have a story to tell?</h3>
            <p className="text-white text-sm leading-relaxed text-left sm:text-center lg:text-center">
              Let's create something meaningful together.
            </p>
            <StartProjectButton 
              variant="dark"
              className="!rounded-lg"
              style={{ padding: "10px 20px" }}
            />
            <div className="flex flex-col sm:items-center lg:items-center items-start gap-3 pt-2">
              <img
                src={footerScanner}
                alt="QR Code"
                className="w-20 h-20 object-cover rounded-lg shrink-0"
              />
              <p className="text-white text-xs leading-relaxed sm:text-center lg:text-center text-left">
                Scan to save our<br />contact details
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-1 flex flex-col md:flex-row items-center justify-between gap-6 text-[15px] font-semibold text-white"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)", fontFamily: "'Inter', sans-serif" }}
        >
          <p>© {currentYear} Vispera Studios. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
