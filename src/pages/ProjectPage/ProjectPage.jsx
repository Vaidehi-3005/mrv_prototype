import  { useState, useEffect } from 'react';
import Navbar from "../../components/ProjectNavbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Overview from "../../components/Overview/Overview";
import ImageGallery from "../../components/ImageGallary/ImageGallery";
import Amenities from "../../components/Amenities/Amenities";
import BhkFilter from "../../components/BhkFilter/BhkFilter";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import Location from "../../components/Location/Location";
import Enquiry from "../Enquiry/Enquiry"; // Make sure this path correctly points to your Enquiry component folder

const ProjectPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

useEffect(() => {
    // This logic runs every time ProjectPage mounts (refresh or navigation)
    console.log("Opening enquiry popup...");
    
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures it runs on mount

  return (
    <div>
      <Navbar />
      <Hero />
       
      <section id="overview">
        <Overview />
      </section>

      <section id="gallery">
        <ImageGallery />
      </section>

      <section id="360-degree-view">
        <BhkFilter />
      </section>

      <section id="amenities">
        <Amenities />
      </section>

      {/* Corrected Locations Section */}
      <section id="locations">
        <Location />
      </section>

      <ScrollToTopButton />

      {/* Embedded Enquiry Popup Engine */}
      <Enquiry isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default ProjectPage;