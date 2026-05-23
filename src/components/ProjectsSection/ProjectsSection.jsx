import React, { useRef, useState, useEffect } from 'react';
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; /* NAYA: Link import kiya */
import styles from './ProjectsSection.module.css';

import img1 from '../../assets/ProjectImg/project1.jpg';
import img2 from '../../assets/ProjectImg/project2.jpg';
import img3 from '../../assets/ProjectImg/project3.jpg';
import img4 from '../../assets/ProjectImg/project4.jpg';
import img5 from '../../assets/ProjectImg/project5.jpg';
import img6 from '../../assets/ProjectImg/project6.jpg';

const projectsData = [
  { id: 1, title: 'Kalpataru One Worli', location: 'Worli, Mumbai', desc: "Ultra-luxurious 4 & 5 BHK sky villas.", image: img1, status: "Ready to Move" },
  { id: 2, title: 'Kalpataru Parkcity', location: 'Thane West', desc: "A sprawling township designed around parks.", image: img2, status: "New Launch" },
  { id: 3, title: 'Kalpataru Blossoms', location: 'Pune, Maharashtra', desc: "Premium residences for modern families.", image: img3, status: "Under Construction" },
  { id: 4, title: 'Kalpataru Verbina', location: 'Bandra, Mumbai', desc: "Signature architectural masterpieces.", image: img4, status: "Ready to Move" },
  { id: 5, title: 'Kalpataru Elegance', location: 'Nagpur, Maharashtra', desc: "A boutique residential landmark.", image: img5, status: "New Launch" },
  { id: 6, title: 'Kalpataru O2', location: 'Andheri East', desc: "Premium spaces engineered for business.", image: img6, status: "Under Construction" }
];

const ProjectsSection = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth; 
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let interval;
    if (!isHovered && sliderRef.current) {
      interval = setInterval(() => {
        const slider = sliderRef.current;
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: slider.offsetWidth / 3, behavior: 'smooth' });
        }
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className={styles.projectsSection} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.container}>
        
        <div className={styles.sectionHeader}>
          <span className={styles.overheadTag}>Our Portfolio</span>
          <h2>Architectural Masterpieces</h2>
        </div>

        <div className={styles.sliderWrapper}>
          
          <button className={`${styles.navBtn} ${styles.leftBtn}`} onClick={() => scroll('left')}>
            <ChevronLeft size={24} />
          </button>

          <div className={styles.sliderContainer} ref={sliderRef}>
            {projectsData.map((project) => (
              <div key={project.id} className={styles.card}>
                
                <span className={styles.statusBadge}>{project.status}</span>
                
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} />
                </div>
                
                <div className={styles.floatingMetadata}>
                  <p className={styles.location}><MapPin size={14} /> {project.location}</p>
                  <h3 className={styles.title}>{project.title}</h3>
                  
                  <div className={styles.metaHidden}>
                    <p className={styles.desc}>{project.desc}</p>
                    {/* NAYA: yahan 'Link' use kiya hai jo '/project-details' par jayega */}
                    <Link to="/project-details" className={styles.viewLink}>
                      View Project <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.rightBtn}`} onClick={() => scroll('right')}>
            <ChevronRight size={24} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;