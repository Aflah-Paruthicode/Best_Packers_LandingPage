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
    { name: "Contact", id: "Contact-us" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smoot" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100000] transition-all duration-500 ${
        isScrolled ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-14 h-12 rounded-2xl flex items-center px-2 bg-white justify-center shadow-lg shadow-blue-500/30">
            <img src="/logo.webp" alt="" />
          </div>

          <span className="text-white font-bold text-xl tracking-tighter uppercase ">
            <span className="text-blue-500">Best Packers </span> And Movers
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => scrollToSection("Contact-us")}
            className="px-6 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl"
          >
            Quote Now
          </button>
          </div>   

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars-staggered"} text-2xl`}></i>
            </button>
        </div>
      </div>

        <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white text-2xl font-bold text-left"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('Contact-us')}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl mt-4"
            >
              Get a Free Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
