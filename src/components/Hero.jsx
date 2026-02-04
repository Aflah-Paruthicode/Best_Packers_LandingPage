import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "circOut" },
    },
  };

  return (
    <section
      id="Home"
      class="relative w-full min-h-screen font-poppins flex items-center justify-center text-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-no-repeat bg-center"
      >
        <div className="absolute  bg-gradient-to-b from-black/80 via-black/50 to-black/90 inset-0" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 px-4 md:px-12 text-center w-full max-w-6xl"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className=" h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-white text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase ">
            india's most trusted network
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter"
        >
          
          Relocation {"  "}
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
            Perfected.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 mt-6 text-sm sm:text-base md:text-xl max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2"
        >
          Fast, safe, and professional shifting services across india. We handle
          the heavy lifting while you focus on your new beginning.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-6"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(37, 99, 235, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("Contact-us")}
            className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl md:rounded-full transition-all duration-300 flex items-center justify-center gap-3"
          >
            Get Free Quote
            <i className="fas fa-arrow-right text-sm"></i>
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            onClick={() => scrollToSection("Services")}
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-2xl md:rounded-full backdrop-blur-sm transition-all"
          >
            Our Services
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-white font-bold text-xl md:text-2xl">1000+</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest mt-1">
              Families Moved
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-white font-bold text-xl md:text-2xl">99.9%</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest mt-1">
              Safe Delivery
            </p>
          </div>

          <div className="text-center col-span-2 md:col-span-1">
            <h3 className="text-white font-bold text-xl md:text-2xl">
              Instant
            </h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest mt-1">
              Live Tracking
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-2xl z-[999]"
        href="https://wa.me/+919656268718?text=Hi best packers movers team 👋"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="absolute inset-0 animate-ping bg-green-500 rounded-full opacity-20" />
      </motion.a>
    </section>
  );
};

export default Hero;
