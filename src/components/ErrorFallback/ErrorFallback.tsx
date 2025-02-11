import React from 'react';
import styles from './ErrorFallback.module.css';

type ErrorFallbackProps = {
  error: Error;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <div className={styles.errorContainer} role="alert">
      <h2 className={styles.errorMessage}>Something went wrong</h2>
      <pre className={styles.errorDetails}>{error.message}</pre>
    </div>
  );
};

export default ErrorFallback;
