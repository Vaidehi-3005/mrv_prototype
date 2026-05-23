import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

import img1 from '../../assets/img9.jpg'; 
import img2 from '../../assets/img6.jpg'; 
import img3 from '../../assets/img8.jpg'; 
import img4 from '../../assets/img7.jpg'; 

const properties = [
  { 
    id: 1, 
    title: 'KALPATARU ONE WORLI', 
    image: img1,
    headline: "Elevate Your Lifestyle",
    highlight: "At One Worli",
    subheadline: "Experience unmatched luxury with panoramic ocean views and world-class amenities right in the heart of the city."
  },
  { 
    id: 2, 
    title: 'KALPATARU PARKCITY', 
    image: img2,
    headline: "Nature Meets Luxury",
    highlight: "In Parkcity",
    subheadline: "A sprawling township designed around lush green parks, offering a serene escape from the urban hustle."
  },
  { 
    id: 3, 
    title: 'KALPATARU BLOSSOMS', 
    image: img3,
    headline: "A New Blooming Era",
    highlight: "Of Elegance",
    subheadline: "Premium residences crafted for modern families, featuring state-of-the-art facilities and seamless connectivity."
  },
  { 
    id: 4, 
    title: 'KALPATARU VERBINA', 
    image: img4,
    headline: "Redefining Urban Living",
    highlight: "With Verbina",
    subheadline: "Signature architectural masterpieces combining sophisticated design with smart home technology."
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 6000); 

    return () => clearInterval(timer);
  }, [activeIndex]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeIn' } }
  };

  const currentProp = properties[activeIndex];

  return (
    <div className={styles.heroContainer}>
      
      {/* Background Image Wrapper */}
      <div className={styles.imageWrapper}>
        <img 
          key={`img-${currentProp.id}`}
          src={currentProp.image} 
          alt={currentProp.title} 
          className={styles.heroImage} 
        />
      </div>
      
      <div className={styles.overlay}></div>

      {/* Hero Content Area */}
      <div className={styles.heroContent}>
        
        {/* NAYA: Dynamic Text Content with Framer Motion AnimatePresence */}
        <div className={styles.dynamicTextContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentProp.id}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInUp}
            >
              <h1 className={styles.headline}>
                {currentProp.headline} <br />
                <span className={styles.highlight}>{currentProp.highlight}</span>
              </h1>
              <p className={styles.subheadline}>
                {currentProp.subheadline}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Explore Button */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            ...fadeInUp,
            visible: { ...fadeInUp.visible, transition: { delay: 0.4, duration: 0.8 } }
          }}
          className={styles.btnContainer}
        >
          <Link to="/projects" style={{ textDecoration: 'none' }}>
  <button className={styles.actionBtn}>
    <span>Explore Projects</span>
    <ArrowRight size={18} />
  </button>
</Link>
        </motion.div>

        {/* Thumbnail Slider */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            ...fadeInUp,
            visible: { ...fadeInUp.visible, transition: { delay: 0.6, duration: 0.8 } }
          }}
          className={styles.thumbnailsContainer}
        >
          {properties.map((prop, index) => (
            <div 
              key={prop.id} 
              className={`${styles.thumbnailCard} ${index === activeIndex ? styles.activeThumbnail : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={prop.image} alt={prop.title} />
              
              <div className={styles.thumbnailOverlay}>
                <h4>{prop.title}</h4>
              </div>

              {index === activeIndex && (
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;