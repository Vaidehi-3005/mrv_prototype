import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Building2, Calendar } from 'lucide-react'; 
import styles from './ProjectsPage.module.css';


import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

// DATA
const allProjects = [
  { id: 1, title: 'Skyline Living', location: 'Worli, Mumbai', specs: '4 & 5 BHK Sky Villas', image: img1, status: 'Ongoing', category: 'Residential' },
  { id: 2, title: 'Shree Vastu Heights', location: 'Nagpur, MH', specs: '500-Bed Institutional Block', image: img2, status: 'Completed', category: 'Government Assets' },
  { id: 3, title: 'Aarav Residency', location: 'Thane West', specs: 'Premium 2 & 3 BHK', image: img3, status: 'Ongoing', category: 'Residential' },
];

const historicalProjects = [
  { id: 1, title: "Omkar Habitat", type: "Institutional", location: "Nagpur, MH", year: "2018", description: "A 500-bed modern hostel facility equipped with solar water heating." },
  { id: 2, title: "Divyam Apartments", type: "Government Asset", location: "Pune, MH", year: "2019", description: "Centralized bus terminal with integrated commercial spaces." }
];

const ProjectsPage = () => {
  const [activeStatus, setActiveStatus] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = allProjects.filter((project) => {
    return (activeStatus === 'All' || project.status === activeStatus) &&
           (activeCategory === 'All' || project.category === activeCategory);
  });

  return (
    <div className={styles.pageContainer}>
      
      {/* SECTION 1: Project Display & Filter Deck  */}
      <section className={styles.directorySection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Our Complete Portfolio</h2>
            <p>Discover our signature residential masterpieces and landmark government assets.</p>
          </div>

          <div className={styles.filterDeck}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Status:</span>
              <div className={styles.btnGroup}>
                {['All', 'Ongoing', 'Completed', 'Upcoming'].map(status => (
                  <button key={status} onClick={() => setActiveStatus(status)}
                    className={`${styles.filterBtn} ${activeStatus === status ? styles.active : ''}`}>
                    {status}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Category:</span>
              <div className={styles.btnGroup}>
                {['All', 'Residential', 'Government Assets'].map(category => (
                  <button key={category} onClick={() => setActiveCategory(category)}
                    className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div layout className={styles.projectsGrid}>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} key={project.id} className={styles.projectCard}>
                  <div className={styles.imageBox}>
                    <span className={styles.badge}>{project.status}</span>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className={styles.cardContent}>
                    <p className={styles.categoryTag}>{project.category}</p>
                    <h3 className={styles.title}>{project.title}</h3>
                    <div className={styles.detailsRow}>
                      <span className={styles.spec}><MapPin size={14} /> {project.location}</span>
                      <span className={styles.specDot}>•</span>
                      <span className={styles.spec}>{project.specs}</span>
                    </div>
                    <button className={styles.inquiryBtn}>VIEW DETAILS<ArrowRight size={16} /></button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/*  SECTION 2: Historical Capability Archives  */}
      <section className={styles.archiveSection}>
        <div className={styles.archiveContainer}>
          <div className={styles.archiveHeader}>
            <h2>Historical Capability Archives</h2>
            <p>A legacy of delivered excellence and infrastructure milestones.</p>
          </div>
          <div className={styles.listContainer}>
            {historicalProjects.map((project) => (
              <div key={project.id} className={styles.rowItem}>
                <div className={styles.projectInfo}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <p className={styles.projectDesc}>{project.description}</p>
                </div>
                <div className={styles.projectMeta}>
                  <div className={styles.metaItem}><Building2 size={16} className={styles.icon} /> <span>{project.type}</span></div>
                  <div className={styles.metaItem}><MapPin size={16} className={styles.icon} /> <span>{project.location}</span></div>
                  <div className={styles.metaItem}><Calendar size={16} className={styles.icon} /> <span>Delivered: {project.year}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* <CTASection /> */}

    </div>
  );
};

export default ProjectsPage;