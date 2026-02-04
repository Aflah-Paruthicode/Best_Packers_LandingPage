
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'


const Footer = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  let ServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID
  let TemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
  let ApiKey = import.meta.env.VITE_EMAIL_API_KEY

    const [formData, setFormData] = useState({ email: "" });
    let [isSent, setIsSent] = useState(true)
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        ServiceId,
        TemplateId,
        formData,
        ApiKey
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          title: "Thank you for subscribing",
          text: "You're now subscribed! Stay tuned for exciting updates. 🚀",
          icon: "success"
        });
        setIsSent(false)
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
  };

  return (
    <footer className="bg-gray-900 text-white font-poppins py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 max-sm:gap-8 lg:gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white">Best Packers & Movers</h2>
          <p className="mt-2 text-gray-400">Moving made easy with trust & care.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/best.packers.movers.2024?mibextid=ZbWKwL" className="text-gray-400 hover:text-blue-500"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/invites/contact/?i=gsltl94li8ut&utm_content=u2j44sy" className="text-gray-400 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/+919656268718?text=Hi,%20I%20need%20help%20with%20moving!%20Can%20you%20provide%20details%20about%20your%20services%20and%20pricing%20?%20" className="text-gray-400 hover:text-blue-500"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><button onClick={() => scrollToSection("Home")} className="text-gray-400 hover:text-blue-500">Home</button></li>
            <li><button onClick={() => scrollToSection("Services")} className="text-gray-400 hover:text-blue-500">Services</button></li>
            <li><button onClick={() => scrollToSection("Reviews")} className="text-gray-400 hover:text-blue-500">Reviews</button></li>
            <li><button onClick={() => scrollToSection("Location")} className="text-gray-400 hover:text-blue-500">Location</button></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="m-1 text-gray-400"><i class="m-1 fa-solid fa-location-dot"></i> Kallai, Kerala, India</p>
          <p className="m-1 text-gray-400"><i class="m-1 fa-solid fa-phone"></i> +919656268718</p>
          <p className="m-1 text-gray-400"><i class="m-1 fa-solid fa-envelope"></i> bestpackers- <br /> movers.help@gmail.com
          </p>
          <div className="mt-4">
            {isSent && 
            <form  onSubmit={sendEmail} >
            <input type="email" onChange={handleChange}
            name="email"
            value={formData.email} placeholder="Enter your email" className="p-2 w-full rounded bg-gray-800 text-white" />
            <button type="submit" className="mt-2 bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">
              Subscribe
            </button>
            </form> }
            
          </div>
        </div>

      </div>

      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Best Packers & Movers. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
