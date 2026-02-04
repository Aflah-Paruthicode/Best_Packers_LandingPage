import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section id="Reviews" className="py-24 bg-gray-50 font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
            Testimonials
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Trusted by <span className="text-blue-600">Thousands</span>
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="pb-20 !px-4"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="py-10">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 relative h-full flex flex-col justify-between group hover:border-blue-200 transition-all duration-300">
                  <div className="absolute top-6 right-8 text-blue-100 group-hover:text-blue-200 transition-colors">
                    <i className="fa-solid fa-quote-right text-6xl"></i>
                  </div>

                  <div className="relative z-10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star ${i < review.rating ? "text-yellow-400" : "text-gray-200"} text-sm`}></i>
                      ))}
                    </div>

                    <p className="text-gray-600 italic leading-relaxed mb-8">"{review.review}"</p>
                  </div>

                  <div className="flex items-center gap-4 relative z-10 border-t border-gray-50 pt-6">
                    <div className="relative">
                      <img src={review.photo} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 p-0.5" />
                      <div className="absolute -bottom-1 -right-1 bg-blue-600 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                        <i className="fa-solid fa-check text-[10px] text-white"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-lg leading-tight">{review.name}</h3>
                      <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;
