import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", title: "Form Submission From Website" });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  let ServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  let TemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  let ApiKey = import.meta.env.VITE_EMAIL_API_KEY;
  let siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(ServiceId, TemplateId, formData, ApiKey)
      .then(() => {
        setIsSent(true);
        setLoading(false);
        Swal.fire({
          title: "Inquiry Received!",
          text: "Our moving experts will contact you shortly.",
          icon: "success",
          confirmButtonColor: "#2563eb",
          borderRadius: "20px",
        });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({ title: "Error", text: "Something went wrong. Please try again.", icon: "error" });
      });
  };

  return (
    <section id="Contact-us" className="py-24 bg-[#f8faff] font-poppins relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Reach Out</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6">
              Ready to start your <span className="text-blue-600">new journey?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-md">
              Fill out the form and get a detailed moving quote within 24 hours. Our specialists are ready to help.
            </p>

            <div className="space-y-6">
              {[
                { icon: "fa-phone", label: "Call Us", val: "+919656268718" },
                { icon: "fa-envelope", label: "Email Support", val: "bestpackersmovers.help@gmail.com" },
                { icon: "fa-headset", label: "Support", val: "24/7 Assistance" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-blue-600">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">{item.label}</p>
                    <p className="text-gray-800 font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white">
              <form onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 px-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 px-1">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91..."
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 px-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 px-1">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="How can we help you move?"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-200 ${
                    loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500 text-white"
                  }`}
                >
                  {loading ? "Sending..." : "Request Free Quote"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
