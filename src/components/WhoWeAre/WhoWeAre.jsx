import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from '../WhoWeAre/WhoWeAre.module.css';

const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAreSection}>
      <div className={styles.container}>
        
        {/* Top Labels (X, Y, Z) */}
        <div className={styles.tagsContainer}>
          <span className={styles.tag}>Excellence</span>
          <span className={styles.dot}>•</span>
          <span className={styles.tag}>Innovation</span>
          <span className={styles.dot}>•</span>
          <span className={styles.tag}>Trust</span>
        </div>

        {/* Main Content */}
        <div className={styles.contentWrapper}>
          <h2 className={styles.heading}>Who we are</h2>
          
          <p className={styles.description}>
            We are visionary creators dedicated to redefining modern living spaces. 
            With a legacy of excellence and a passion for architectural innovation, 
            we build more than just homes—we craft vibrant communities where luxury meets sustainability. 
            Every project is a testament to our commitment to quality, aesthetic brilliance, and 
            creating enduring value for our residents.
          </p>

          {/* Animated Call to Action Link */}
          <a href="#about" className={styles.knowMoreLink}>
            Know More
            <ArrowRight size={20} className={styles.arrowIcon} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;