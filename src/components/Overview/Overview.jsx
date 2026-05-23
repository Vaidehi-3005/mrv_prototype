import styles from "./Overview.module.css";


const Overview = () => {
  return (
    <>
      <section id="overview" className={styles.container}>
        <div className={styles.sectionWrapper}>
          
          <div className={styles.gridWrapper}>
            
            {/* Left Side: Professional Corporate Copy */}
            <div className={styles.textColumn}>
              <div className={styles.taglineBlock}>
                <span className={styles.accentLine} />
                <span className={styles.sectionTagline}>Architectural Excellence</span>
              </div>
              
              {/* <h2 className={styles.sectionHeading}>Project Overview</h2> */}
              
              <div className={styles.bodyText}>
                <p className={styles.highlightText}>
                  THIS IS DUMMY TEXT: consectetur adipiscing elit. Etiam lobortis
                  facilisis sem. Nullam nec mi et neque pharetra sollicitudin. Praesent
                  imperdiet mi nec ante. Donec ullamcorper, felis non sodales commodo.
                </p>
                <p>
                  Sed interdum libero ut metus. Pellentesque placerat. Nam rutrum augue a
                  leo. Morbi sed elit sit amet ante lobortis sollicitudin. Praesent blandit
                  blandit mauris. Lorem ipsum dolor sit amet, et neque pharetra
                  sollicitudin. Praesent imperdiet mi nec ante. Donec ullamcorper, felis
                  non sodales commodo, lectus velit ultrices augue, a dignissim nibh
                  lectus placerat pede. 
                </p>
                <p>
                  Vivamus nunc nunc, molestie ut, Praesent blandit blandit mauris.
                  Praesent lectus tellus, aliquet aliquam, luctus a, egestas a, turpis.
                  Mauris lacinia lorem sit amet ipsum. Nunc quis urna dictum turpis
                  accumsan semper.
                </p>
              </div>

              {/* Developer Project Specs Quick Grid */}
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specNumber}>100%</span>
                  <span className={styles.specLabel}>Modern Layout</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specNumber}>Premium</span>
                  <span className={styles.specLabel}>Finishes & Materials</span>
                </div>
              </div>
            </div>

            {/* Right Side: Large Commercial Image Viewport */}
            <div className={styles.imageColumn}>
              <div className={styles.imageContainer}>
                <img
                  src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200"
                  alt="Modern architectural construction layout"
                  className={styles.mainImage}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;