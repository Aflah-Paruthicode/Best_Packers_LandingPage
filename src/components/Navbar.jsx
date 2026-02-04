import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "Home" },
    { name: "Services", id: "Services" },
    { name: "About", id: "About" },
    { name: 'Contact', id: 'Contact-us' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smoot" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-16 h-14 rounded-2xl flex items-center px-2 bg-white justify-center shadow-lg shadow-blue-500/30">
            <img src="/logo.webp" alt="" />
          </div>

          <span className="text-white font-bold text-xl tracking-tighter uppercase ">
            <span className="text-blue-500">Best Packers </span> And Movers
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} 
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group" >
              {link.name}
               </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
