import React from 'react';
import { useGetCharacterByIdQuery } from '../../api/charactersApi';
import Loader from '../../components/Loader/Loader.tsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.tsx';
import { Link, useParams } from 'react-router';
import styles from './CardPage.module.css';
import backIcon from '../../assets/img/arrow.svg';
import { getStatusClass } from '../../utils/statusUtils.ts';

const CardPage: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    return <ErrorMessage message="Character not found." />;
  }

  const { data: character, isFetching, error } = useGetCharacterByIdQuery(id);

  if (isFetching) {
    return <Loader />;
  }

  if (error || !character) {
    return <ErrorMessage message="Character not found." />;
  }

  return (
    <div className={styles.card}>
      <img src={character.image} alt={character.name} className={styles.characterImage} />
      <h1 className={styles.characterName}>
        {character.name} - {character.species}
      </h1>
      <div className={styles.characterFooter}>
        <p className={styles.characterStatusText}>
          Status:{' '}
          <span className={`${styles.characterStatus} ${getStatusClass(character.status)}`}>{character.status}</span>
        </p>
        <p className={styles.characterCreated}>Created: {character.created}</p>
      </div>
      <Link to="/" className={styles.goBackBtn}>
        <img src={backIcon} alt="Go Back" className={styles.backIcon} />
        <span>Come back</span>
      </Link>
    </div>
  );
};

export default CardPage;
