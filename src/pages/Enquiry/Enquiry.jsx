import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css'; 
import styles from './Enquiry.module.css';

export default function Enquiry({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    agreed: false
  });

  if (!isOpen) return null; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please accept the terms and privacy policy to continue.");
      return;
    }
    console.log('Enquiry Data Submitted:', formData);
    alert('Form submitted successfully!');
    onClose(); 
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      
      {/* Absolute positioning wrapper for the out-of-box close button placement */}
      <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
        
        {/* Rounded Purple Close Button at Top Right Corner */}
        <button className={styles.closeCircleBtn} onClick={onClose}>
          &times;
        </button>

        {/* Outer White Card Frame with Purple Border inside */}
        <div className={styles.modalCardExterior}>
          <div className={styles.modalCardInteriorBorder}>
            
            <div className={styles.formHeader}>
              <h2>ENQUIRE NOW</h2>
              <div className={styles.titleUnderline}></div>
            </div>

            <form onSubmit={handleSubmit} className={styles.screenshotForm}>
              
              {/* Row 1: First Name & Last Name Split Layout */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <input 
                    type="text" 
                    required 
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input 
                    type="text" 
                    required 
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2: Full Width Email */}
              <div className={styles.inputGroupFull}>
                <input 
                  type="email" 
                  required 
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Row 3: Country Flag Picker & Bottom-Border Phone Field Combo */}
              <div className={styles.phoneFieldCombo}>
                <PhoneInput
                  defaultCountry="in"
                  value={formData.phone}
                  onChange={(phoneStr) => setFormData({ ...formData, phone: phoneStr })}
                  inputClassName={styles.screenshotPhoneInput}
                  countrySelectorClassName={styles.screenshotCountrySelector}
                  placeholder="Phone Number*"
                />
              </div>

              {/* Row 4: Custom Disclaimer Privacy Terms Checkbox */}
              <div className={styles.disclaimerCheckboxRow}>
                <input 
                  type="checkbox" 
                  id="privacyAgreed"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                />
                <label htmlFor="privacyAgreed">
                  By continuing to register with us, you agree and accept our <span>Privacy Policy</span> and authorize to be contacted.
                </label>
              </div>

              {/* Row 5: Luxury Hollow Capsule Pill Submit Trigger */}
              <button type="submit" className={styles.capsuleSubmitBtn}>
                SUBMIT
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}