import React, { memo } from "react";
import { motion } from "framer-motion";
import { cardData } from "../constants";

const Services = () => {
  return (
    <section id="Services" className="py-24 bg-[#fcfcfc] font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">
            What we do
          </motion.span>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black mt-3 text-gray-900">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Solutions</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Services;

const Cards = () => {
  let services = cardData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          onClick={() => window.open(`https://wa.me/+919656268718?text=Hi, i would love to hear more about ${service.title} service`)}
          className="group relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl bg-white cursor-pointer"
        >
          <img
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={service.img}
            alt={service.alt}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-blue-900/90" />

          <div className="absolute top-6 left-6 z-20">
            <div className="w-12 h-12 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white text-xl">
              <img src="/logo.webp" alt="" />
            </div>
          </div>

          <div className="absolute bottom-0 p-8 z-20 w-full transition-all duration-300">
            <h1 className="text-white text-2xl font-bold mb-3">{service.title}</h1>

            <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              {service.desc}
            </p>

            <div className="mt-6 flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Explore Details <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
