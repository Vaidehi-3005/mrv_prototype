import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIXED: Added missing closing quote and capitalized options for clean presentation
  const navItems = ['Overview', 'Gallery', '360 Degree View', 'Amenities', 'Locations'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.menuOpenNavbar : ''}`}>
      
      {/* LEFT END: Project Name Heading */}
      <div className={`${styles.projectHeading} ${isMobileMenuOpen ? styles.darkText : ''}`}>
        DIVYAM APARTMENTS
      </div>

      {/* HAMBURGER ICON */}
      <div 
        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.activeHamburger : ''}`} 
        onClick={toggleMobileMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* CENTRE: Navigation Links */}
      <ul className={`${styles.navbarLinks} ${isMobileMenuOpen ? styles.activeMenu : ''}`}>
        {navItems.map((item) => {
          // FIXED: Uses global regex replace to handle items with multiple spaces cleanly
          const targetId = item.toLowerCase().replace(/\s+/g, '-');
          
          return (
            <li key={item} className={styles.navItem}>
              <a
                href={`#${targetId}`}
                className={`${styles.navLink} ${activeTab === item ? styles.active : ''}`}
                onClick={(e) => {
                  setActiveTab(item);
                  setIsMobileMenuOpen(false); 
                  
                  const element = document.getElementById(targetId);
                  if (element) {
                    e.preventDefault(); 
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      {/* RIGHT END: MRV Properties Logo */}
      <div className={`${styles.navbarLogo} ${isMobileMenuOpen ? styles.darkText : ''}`}>
        <span className={styles.logoMain}>MRV</span>
        <span className={styles.logoSub}>PROPERTIES</span>
      </div>
      
    </nav>
  );
};

export default Navbar;