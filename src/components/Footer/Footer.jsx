import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
  FaLocationDot,
} from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerbody}>
        <div className={styles.footercontainer}>
          <div className={`${styles.footercol} ${styles.fadeup}`}>
            {/* Logo ki jagah text */}
            <div className={styles.footerlogo}>
              <h2>MRV</h2>
            </div>

            <p className={styles.footercol_p}>Follow us</p>
            <br />
            <div className={styles.socials}>
              <span><a href="#" className={styles.twitter}><FaSquareXTwitter /></a></span>
              <span><a href="#" className={styles.facebook}><FaFacebook /></a></span>
              <span><a href="#" className={styles.linkedin}><FaLinkedinIn /></a></span>
              <span><a href="#" className={styles.instagram}><FaInstagram/></a></span>
              <span><a href="#" className={styles.mapIcon}><FaLocationDot /></a></span>
            </div>
          </div>

          <div className={`${styles.footercol} ${styles.fadeup} ${styles.delay1}`}>
            <h3 className={styles.footercol_h3}>Services</h3>
            <ul>
              <li className={styles.footercol_ul_li} onClick={() => navigate('/digital-marketing')}>Commercial Spaces </li>
              <li className={styles.footercol_ul_li} onClick={() => navigate('/enterprise-automation')}>Residential Projects</li>
              <li className={styles.footercol_ul_li} onClick={() => navigate('/mobile-development')}>Architectural Design</li>
              <li className={styles.footercol_ul_li} onClick={() => navigate('/web-development')}>Property Management</li>
            </ul>
          </div>

          <div className={`${styles.footercol} ${styles.fadeup} ${styles.delay2}`}>
            <h3 className={styles.footercol_h3}>Information</h3>
            <ul>
              <li className={styles.footercol_ul_li} onClick={() => navigate('/about')}>About</li>
              <li className={styles.footercol_ul_li} onClick={() => navigate('/contact')}>Contact Us</li>
              <li className={styles.footercol_ul_li} onClick={() => navigate('/faq')}>FAQs</li>
              <li className={styles.footercol_ul_li} onClick={() => navigate('/privacypolicy')}>Privacy Policy</li>
            </ul>
          </div>

          <div className={`${styles.footercol} ${styles.fadeup} ${styles.delay3}`}>
            <h3 className={styles.footercol_h3}>Contacts</h3>
            <p className={styles.footercol_p}>Level 42, Horizon Towers, Cyber Avenue, Metropolis, 100021.</p>
            <p className={styles.footercol_p}>+91 98765 43210</p>
            <p className={styles.footercol_p}>info@mrvbenchmarks.com</p>
          </div>
        </div>

        <div className={styles.footerbottom}>
          © {new Date().getFullYear()} MRV. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;