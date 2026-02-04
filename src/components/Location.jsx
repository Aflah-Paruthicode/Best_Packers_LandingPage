import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";

const customIcon = new L.Icon({
  iconUrl: "/location.webp",
  iconSize: [45, 45],
  iconAnchor: [22, 45],
  popupAnchor: [0, -45],
  className: "drop-shadow-2xl rounded-full border-2 border-white",
});

const LocationMap = () => {
  const position = [11.2344408, 75.791362];

  let apiKey = import.meta.env.VITE_LOCATION_API;

  return (
    <section id="Location" className="py-24 bg-white font-poppins relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
            Find Us
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Our Strategic <span className="text-blue-600">Hub</span>
          </motion.h2>
        </div>

        <div className="relative group">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="absolute top-10 left-10 z-[1000] hidden lg:block max-w-sm">
            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/20">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <i className="fa-solid fa-map-location-dot text-white text-xl"></i>
              </div>
              <h3 className="text-gray-900 font-extrabold text-2xl mb-2">Headquarters</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kallai, Kozhikode,
                <br />
                Kerala - 673003
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <i className="fa-solid fa-clock text-blue-600"></i>
                  <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <i className="fa-solid fa-phone text-blue-600"></i>
                  <span>+919656268718</span>
                </div>
              </div>
              <button
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`)}
                className="w-full mt-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300"
              >
                Get Directions
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 h-[500px] z-0"
          >
            <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
              <TileLayer url={`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${apiKey}`} />
              <Marker position={position} icon={customIcon}>
                <Popup className="custom-popup">
                  <div className="p-2 font-poppins">
                    <strong className="text-blue-600">Best Packers And Movers</strong>
                    <br />
                    Kozhikode, Kerala
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
