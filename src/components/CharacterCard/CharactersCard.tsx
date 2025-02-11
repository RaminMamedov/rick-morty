import React from 'react';
import { Character } from '../../api/charactersApi';
import styles from './CharacterCard.module.css';
import { Link } from 'react-router';
import { getStatusClass } from '../../utils/statusUtils.ts';

type CharactersCardProps = {
  character: Character;
};

const CharactersCard: React.FC<CharactersCardProps> = ({ character }) => (
  <Link to={`/character/${character.id}`} className={styles.card}>
    <img src={character.image} alt={character.name} className={styles.characterImage} />
    <h3 className={styles.characterName}>
      {character.name} - {character.species}
    </h3>
    <div className={styles.characterFooter}>
      <p className={styles.characterStatusText}>
        Status:{' '}
        <span className={`${styles.characterStatus} ${getStatusClass(character.status)}`}>{character.status}</span>
      </p>
      <p className={styles.characterCreated}>Created: {character.created}</p>
    </div>
  </Link>
);

export default CharactersCard;
