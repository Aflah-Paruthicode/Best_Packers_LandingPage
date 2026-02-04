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
        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className=" h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-white text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase ">
            india's most trusted network
          </span>
        </motion.div>  

        <motion.h1  className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter"> Relocation
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
            Perfected.
          </span>
          </motion.h1> 

      </motion.div>
    </section>
  );
};

export default Hero;
