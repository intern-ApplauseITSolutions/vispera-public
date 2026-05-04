import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/transparent-logo.png";
import { StartProjectButton } from "../common";
import InquiryModal from "../common/InquiryModal";
import SectionIndicator from "../home/SectionIndicator";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/our-work" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuButtonClick = () => {
    setIsMobileMenuOpen(false);
    // Wait for menu to close before opening modal
    setTimeout(() => {
      setIsModalOpen(true);
    }, 300);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 h-[88px] flex items-center" style={{ backgroundColor: "#F7F5F2" }}>

      {/* Main navbar row */}
      <div className="w-full px-8 md:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 -ml-8">
            <img
              src={logo}
              alt="Vispera Studios"
              className="w-auto h-[70px] object-contain"
            />
          </Link>

          {/* Desktop nav links — hidden on tablet, show on lg+ */}
          <div className="hidden lg:flex items-center gap-7 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-semibold transition-colors duration-200 text-[15px] ${
                  location.pathname === link.href || (link.href === "/services" && location.pathname.startsWith("/services"))
                    ? "text-[#5EA4A4]"
                    : "text-[#0A374C] hover:text-[#5EA4A4]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <StartProjectButton 
            variant="dark"
            className="!hidden lg:!inline-block"
            disableModal={true}
            onClick={() => setIsModalOpen(true)}
          />

          {/* Mobile/Tablet toggle — visible below lg */}
          <button
            className="lg:hidden text-[#0A374C] p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 w-full shadow-lg px-6 py-5 lg:hidden"
            style={{ backgroundColor: "#F7F5F2" }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-[#1a1a1a] hover:text-[#2a9d8f] transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <StartProjectButton 
                variant="dark"
                className="text-[10px] py-2.5 px-6 w-fit"
                disableModal={true}
                onClick={handleMobileMenuButtonClick}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    
    {/* Inquiry Modal - Managed at Navbar level */}
    <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    
    {/* Section Indicator - Fixed below navbar - Only on home page */}
    {location.pathname === "/" && (
      <div className="fixed top-[88px] left-0 w-full z-40">
        <SectionIndicator />
      </div>
    )}
    
    {/* Simple line on other pages - Only visible after scroll */}
    {location.pathname !== "/" && isScrolled && (
      <div className="fixed top-[88px] left-0 w-full h-[0.5px] bg-[#0A374C] z-40" />
    )}
    </>
  );
}
