import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="relative bg-[#f8f9fa] py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Quality Control</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
            Our Packing in <span className="text-blue-600">Action</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
            Experience the precision and care we take with every single item. Your belongings aren't just cargo, they're memories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          <div className="relative w-[280px] md:w-[320px] aspect-[9/16] bg-black rounded-[2.5rem] p-3 border-[6px] border-gray-900 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
            </div>

            <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-gray-900 relative">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/packed-items.webm" type="video/webm" />
                <source src="/packed-items.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="absolute -right-12 bottom-20 ">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <i className="fas fa-check text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase">Status</p>
                <p className="text-sm font-bold text-gray-800">100% Secure Packing</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
