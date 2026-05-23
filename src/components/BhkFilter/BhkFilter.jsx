import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 1. Import the hook
import styles from "./BhkFilter.module.css";

const BhkFilter = () => {
  const [activeTab, setActiveTab] = useState("2bhk");
  const navigate = useNavigate(); // 👈 2. Initialize the navigate function

  const flatData = {
    "2bhk": {
      title: "Executive 2 BHK Layout",
      description: "Optimized for modern urban living, our 2 BHK blueprints maximize utility by eliminating dead space. Features an expansive master suite, modular kitchen, and dual private washrooms perfectly tailored for an efficient workflow.",
      mapImage: "https://www.houseyog.com/res/floorplan/fp1031-26x32-house-plan-west-face-featured-img.jpg",
      link: "/virtual-tour" // Example link for 2 BHK virtual tour
    },
    "3bhk": {
      title: "Premium 3 BHK Family Suite",
      description: "Designed with growing families in mind. This premium setup introduces a grand living pavilion, isolated master suite privacy, a dedicated kids room, and extended balconies optimized for continuous natural daylight.",
      mapImage: "https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2023/11/3BHK-house-plan-with-garden.jpg",
      link: "/virtual-tour"
    },
    "4bhk": {
      title: "Elite 4 BHK Imperial Unit",
      description: "Our signature luxury configuration. This sprawling layout integrates four bedrooms, a deep family lounge zone, smart automation access points, a private walk-in dresser system, and an ultra-wide structural panorama balcony.",
      mapImage: "https://www.houseyog.com/res/floorplan/fp1168-36x42-house-plan-west-face-featured-img.png",
      link: "/virtual-tour"
    }
  };

  const currentUnit = flatData[activeTab];

  return (
    <section className={styles.filterSection}>
      <div className={styles.fullWidthWrapper}>
        
        <h2 className={styles.sectionHeading}>Apartment Configurations</h2>

        {/* Dynamic Selector Tabs */}
        <div className={styles.tabButtonGroup}>
          {Object.keys(flatData).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`${styles.tabButton} ${activeTab === tabKey ? styles.activeTab : ""}`}
            >
              {tabKey.toUpperCase().replace("BHK", " BHK")}
            </button>
          ))}
        </div>

        {/* Full-Screen Edge-to-Edge Showcase Frame */}
        <div className={styles.showcaseBox}>
          
          {/* Left Panel: Floor Plan Viewport */}
          <div className={styles.mapViewport}>
            <img 
              key={`${activeTab}-img`} 
              src={currentUnit.mapImage} 
              alt={currentUnit.title} 
              className={styles.mapImage}
            />
          </div>

          {/* Right Panel: Content Presentation Zone */}
          <div className={styles.detailsColumn}>
            <div key={`${activeTab}-text`} className={styles.animatedTextGroup}>
              <h3 className={styles.unitTitle}>{currentUnit.title}</h3>
              <p className={styles.unitDescription}>{currentUnit.description}</p>
              
              {/* 👈 3. Dynamic Navigation Button */}
              <button 
                onClick={() => navigate(currentUnit.link)}
                className={styles.viewDetailsButton}
              >
                Virtual Tour
                {/* <svg viewBox="0 0 24 24" className={styles.btnArrow}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg> */}
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BhkFilter;