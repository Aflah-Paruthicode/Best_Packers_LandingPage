import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomerReviews from "./components/CustomerReviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Location from "./components/Location";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VideoSection />
      <Services />
      <WhyChooseUs />
      <CustomerReviews />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
