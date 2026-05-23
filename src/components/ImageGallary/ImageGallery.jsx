import { useState, useEffect, useRef } from "react";
import styles from "./ImageGallery.module.css";

const ProjectGallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "DLF Cyber City - Premium Corporate Business Hub",
      url: "https://visionrealtygroup.net/wp-content/uploads/2025/05/01-1-scaled.png",
    },
    {
      id: 2,
      title: "Modern Architectural Commercial Facade",
      url: "https://visionrealtygroup.net/wp-content/uploads/2025/05/terrace01-scaled.png",
    },
    {
      id: 3,
      title: "High-Rise Office Complex Infrastructure",
      url: "https://visionrealtygroup.net/wp-content/uploads/2025/05/06-scaled.jpg",
    },
    {
      id: 4,
      title: "Urban Skyline & Corporate Headquarters",
      url: "https://visionrealtygroup.net/wp-content/uploads/2025/05/terrace01-scaled.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [activeIndex]);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleNav = (direction) => {
    stopAutoPlay();
    if (direction === "next") {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const handleThumbClick = (index) => {
    stopAutoPlay();
    setActiveIndex(index);
  };

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % galleryItems.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        
        <h2 className={styles.sectionTitle}>GALLERY</h2>

        {/* This main wrapper acts as the layout container */}
        <div className={styles.showcaseBox}>
          
          {/* VIEWPORT PANEL */}
          <div className={styles.leftShowcase}>
            <div 
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {galleryItems.map((item) => (
                <div key={item.id} className={styles.slideItem}>
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className={styles.mainHeroImg}
                  />
                </div>
              ))}
            </div>

            {/* Title Overlay: Hidden on mobile view to match your mockup */}
            <div className={styles.captionOverlay}>
              {/* <h3 className={styles.imageCaption}>
                {galleryItems[activeIndex].title}
              </h3> */}
            </div>
          </div>

          {/* CONTROLS PANEL */}
          <div className={styles.rightControls}>
            
            <button 
              onClick={() => handleNav("prev")}
              className={styles.arrowButton}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" className={styles.arrowIcon}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className={styles.thumbnailsContainer}>
              {visibleIndices.map((globalIndex, viewIndex) => (
                <button
                  key={`${galleryItems[globalIndex].id}-${viewIndex}`}
                  onClick={() => handleThumbClick(globalIndex)}
                  className={`${styles.thumbWrapper} ${globalIndex === activeIndex ? styles.activeThumb : ""}`}
                >
                  <img 
                    src={galleryItems[globalIndex].url} 
                    alt={galleryItems[globalIndex].title} 
                    className={styles.thumbImage} 
                  />
                </button>
              ))}
            </div>

            <button 
              onClick={() => handleNav("next")}
              className={styles.arrowButton}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" className={styles.arrowIcon}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;