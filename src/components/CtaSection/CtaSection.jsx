import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './CtaSection.module.css';

const CtaSection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaCard}>
        <h2>Need help finding the right project?</h2>
        <p>Connect with our sales experts directly for inventory details, pricing, or a site visit.</p>
        
        {/* Apna WhatsApp number yahan daalein */}
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
          <MessageCircle size={22} />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaSection;