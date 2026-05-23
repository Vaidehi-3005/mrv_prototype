import { useState } from 'react';
import Enquiry from '../../pages/Enquiry/Enquiry'; // Imports your popup modal
import styles from './Location.module.css';

export default function LocationPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
 

      <div className={styles.pageContainer}>
        
        {/* Added Page Main Header Section */}
        <div className={styles.pageHeader}>
          <h1>Locations</h1>
          <p>Discover the connected lifestyle waiting for you at Divyam Apartments.</p>
        </div>
        
        {/* Main 2-Column Split Container */}
        <div className={styles.splitGrid}>
          
          {/* LEFT SIDE: Clean Square Map Window */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://maps.google.com/maps?q=MRV%20Properties&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Divyam Apartments Location Map"
              width="100%"
              height="100%"
              className={styles.mapIframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* RIGHT SIDE: Address Text & Conversion Elements */}
          <div className={styles.contentContainer}>
            <span className={styles.accentLabel}>Project Location</span>
            <h2 className={styles.projectTitle}>Divyam Apartments</h2>
            
            {/* Address Details Block */}
            <div className={styles.addressBlock}>
              <p className={styles.primaryAddress}>
                Plot No. 12, Sector 45, Near Central Park,
              </p>
              <p className={styles.secondaryAddress}>
                Gurugram, Haryana - 122003, India
              </p>
            </div>

            {/* Premium Enquiry Action Button */}
            <button 
              onClick={() => setIsPopupOpen(true)}
              className={styles.enquireButton}
            >
              Enquire Now
            </button>
          </div>

        </div>
      </div>

      {/* Manual Enquiry Popup Trigger */}
      <Enquiry isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}