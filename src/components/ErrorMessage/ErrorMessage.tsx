import React from 'react';
import styles from './ErrorMessage.module.css';

export type ErrorMessageProps = {
  message?: string;
  error?: any;
  context?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, error, context = 'Data' }) => {
  let errorMessage = message || 'An unknown error occurred. Please try again.';

  if (error && typeof error === 'object') {
    if ('status' in error && typeof error.status === 'number') {
      switch (error.status) {
        case 400:
          errorMessage = 'Bad request. Please check your input and try again.';
          break;
        case 404:
          errorMessage = 'Character not found. Please check your search query.';
          break;
        case 500:
          errorMessage = 'Server error. Please try again later.';
          break;
        default:
          errorMessage = `An error occurred while fetching ${context}. Please try again.`;
      }
    }
  }

  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
