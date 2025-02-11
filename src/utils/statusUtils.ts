import styles from '../components/CharacterCard/CharacterCard.module.css';

const statusClasses: Record<string, string> = {
  alive: styles.statusAlive,
  dead: styles.statusDead,
  unknown: styles.statusUnknown,
};

export const getStatusClass = (status: string): string => {
  return statusClasses[status.toLowerCase()] || styles.statusUnknown;
};
