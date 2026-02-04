import React, { useState , useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'


const ContactForm = () => {

  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef();


  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", title:"" });
  const [isSent, setIsSent] = useState(false);

  let ServiceId = 'import.meta.env.VITE_EMAIL_SERVICE_ID'
  let TemplateId = 'import.meta.env.VITE_EMAIL_TEMPLATE_ID'
  let ApiKey = 'import.meta.env.VITE_EMAIL_API_KEY'
  let siteKey = 'import.meta.env.VITE_RECAPTCHA_SITE_KEY'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    if (!captchaValue) {
      Swal.fire({
        title: "Complete reCAPTCHA!",
        text: "Please complete the reCAPTCHA!",
        icon: "error"
              });
      return;
    }
  
    emailjs
      .send(
        ServiceId,
        TemplateId,
        formData,
        ApiKey
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
        recaptchaRef.current.reset(); 
        setCaptchaValue(null); 
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
  };
  

  return (

    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true, amount: 0.2 }}
      className="my-36 font-poppins lg:py-20"
    >
    <div id="Contact-us" >
    <h2 class="text-4xl max-sm:text-3xl py-16 font-bold text-center text-gray-900">Contact Us</h2>
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg max-sm:mx-5">

      {isSent ? (
        <p className="text-green-500 font-semibold">Message sent successfully!</p>
      ) : (
        <form onSubmit={sendEmail}>
          <label className="block mb-2  font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-2xl mb-4"
            placeholder="Enter your name"
            required
          />

          <input
            type="hidden"
            name="title"
            value='Form Submission From Website'
            onChange={handleChange}
            className="w-full p-3 border rounded-2xl mb-4"
            placeholder="Enter the subject"
            required
          />
          
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-2xl mb-4"
            placeholder="Enter your email"
            required
          />

          <label className="block mb-2 font-semibold">Phone</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-2xl mb-4"
            placeholder="Enter your number"
            required
          />

          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-2xl mb-4"
            rows="4"
            placeholder="Your message..."
            required
          ></textarea>

            <ReCAPTCHA className="my-2"
              sitekey={siteKey}
              onChange={(value) => setCaptchaValue(value)}
              ref={recaptchaRef}
            />


          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      )}
    </div>
    </div>
    </motion.div>
  );
};

export default ContactForm;
