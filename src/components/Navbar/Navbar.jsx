import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation(); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/'; 

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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarClasses = `${styles.navbar} ${(isScrolled || !isHomePage) ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.menuOpenNavbar : ''}`;

  return (
    <nav className={navbarClasses}>
      
      <Link to="/" style={{ textDecoration: 'none' }} className={`${styles.navbarLogo} ${isMobileMenuOpen ? styles.darkText : ''}`}>
        <span className={styles.logoMain}>MRV</span>
        <span className={styles.logoSub}>PROPERTY & CO.</span>
      </Link>

      <div 
        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.activeHamburger : ''}`} 
        onClick={toggleMobileMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <ul className={`${styles.navbarLinks} ${isMobileMenuOpen ? styles.activeMenu : ''}`}>
        {navItems.map((item) => (
          <li key={item.name} className={styles.navItem}>
            <Link
              to={item.path}
              className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
              onClick={() => {
                setIsMobileMenuOpen(false); 
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      
    </nav>
  );
};

export default Navbar;