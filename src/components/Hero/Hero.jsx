import  { useState } from 'react'; // FIXED: Swapped useNavigate for useState
import styles from './Hero.module.css';
import Enquiry from '../../pages/Enquiry/Enquiry'; // Make sure this path correctly points to your Enquiry folder

const Hero = () => {
  // Setup the modal popup visibility state tracking toggle flag
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className={styles.heroContainer} id="home">
      {/* Background Image Element - Is par zoom animation apply hogi */}
      <img 
        className={styles.heroImage} 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop" 
        alt="Premium Luxury Flat" 
      />

      {/* Grayscale aur Dark Overlay */}
      <div className={styles.overlay}></div>
      
      {/* Content Section */}
      <div className={styles.content}>
        <h1 className={styles.title}>Divyam Apartments</h1>
        <p className={styles.subtitle}>
          where premium structural elegance meets a world-class curation of modern, future-ready amenities.
        </p>
        
        {/* FIXED: Flips state to true on click to mount the modal directly */}
        <button className={styles.ctaButton} onClick={() => setIsPopupOpen(true)}>
          Enquire Now
        </button>
      </div>

      {/* The Screenshot-Styled Horizontal Enquiry Popup Engine */}
      <Enquiry isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default Hero;