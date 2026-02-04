import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  let ServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  let TemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  let ApiKey = import.meta.env.VITE_EMAIL_API_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(ServiceId, TemplateId, formData, ApiKey)
      .then(() => {
        Swal.fire({
          title: "Successfully Subscribed!",
          text: "Check your inbox for moving tips and exclusive offers.",
          icon: "success",
          confirmButtonColor: "#3b82f6",
          background: "#111827",
          color: "#fff",
        });
        setFormData({ email: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setIsSubmitting(false);
      });
  };

  return (
    <footer className="bg-[#0b0f1a] text-white/80 font-poppins pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 p-1 bg-white/85 rounded-lg flex items-center justify-center">
                <img src="/logo.webp" alt="" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Best packers and<span className="text-blue-500"> movers</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Redefining the moving experience across India with precision, care.
            </p>
            <div className="flex gap-4">
              {[
                { icon: "fa-facebook-f", url: "https://www.facebook.com/best.packers.movers.2024?mibextid=ZbWKwL" },
                { icon: "fa-instagram", url: "https://www.instagram.com/invites/contact/?i=gsltl94li8ut&utm_content=u2j44sy" },
                { icon: "fa-whatsapp", url: "https://wa.me/+919656268718?text=Hi best packers movers team 👋" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -3 }}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <i className={`fab ${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Explore</h3>
            <ul className="space-y-4">
              {["Home", "Services", "Reviews", "Location"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Contact Hub</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 group">
                <i className="fa-solid fa-location-dot text-blue-500 mt-1"></i>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  Kallai, Kozhikode, <br /> Kerala, India - 673003
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <i className="fa-solid fa-phone text-blue-500"></i>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">+919656268718</p>
              </div>
              <div className="flex items-center gap-3 group">
                <i className="fa-solid fa-envelope text-blue-500"></i>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors break-all">bestpackersmovers.help@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Get moving tips and price alerts.</p>
            <form onSubmit={sendEmail} className="relative">
              <input
                type="email"
                required
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Email address"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-3 w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-900/20"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-tighter">
          <p>&copy; {new Date().getFullYear()} Best packers and movers India. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>   
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
