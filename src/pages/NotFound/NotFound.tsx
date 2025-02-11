import React from 'react';
import { Link } from 'react-router';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.space}></div>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <span className={styles.portalText}>44</span>
          <div className={styles.portal}></div>
        </div>
        <p className={styles.notFoundText}>
          The page you are trying to search has been <br /> moved to another universe.
        </p>
        <Link to="/" className={styles.notFoundButton}>
          GET ME HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
