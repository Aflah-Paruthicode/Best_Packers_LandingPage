import { motion } from "framer-motion";
import { features } from "../constants";

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-24 bg-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-bold tracking-widest uppercase text-sm"
            >
              The Best Packers And Movers Advantage
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
              Why thousands trust us with their <span className="text-blue-600">belongings</span>
            </motion.h2>
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gray-500 text-lg md:text-right max-w-sm">
            We don't just move boxes, we move lives with reliability and precision.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-8 bg-[#f8faff] rounded-[2rem] border border-blue-50/50 hover:bg-blue-600 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full transition-all duration-500 group-hover:scale-[3]" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-500">
                  <i className={`fa-solid ${item.icon} text-2xl text-blue-600 group-hover:text-white`}></i>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-500">{item.title}</h3>

                <p className="text-gray-600 group-hover:text-blue-100 transition-colors duration-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 bg-gray-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-[10px] text-white">
                    <i className="fas fa-user"></i>
                  </div>
                ))}
             </div>
             <p className="text-white text-sm font-medium">
                Joined by <span className="text-blue-400">1,000+</span> happy customers
             </p>
          </div>
          <button onClick={() => window.open('https://wa.me/+919567078537?text=Hi best packers movers team 👋')} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all">
             Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
