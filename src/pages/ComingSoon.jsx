
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import styles from './ComingSoon.module.css';

const ComingSoon = ({ pageName }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <Clock size={60} className={styles.icon} />
        <h1 className={styles.title}>{pageName}</h1>
        <h2 className={styles.subtitle}>Coming Soon</h2>
        <p className={styles.description}>
          We are currently crafting this page to bring you an extraordinary experience. 
          Stay tuned for something amazing!
        </p>
        <Link to="/" className={styles.backBtn}>
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;