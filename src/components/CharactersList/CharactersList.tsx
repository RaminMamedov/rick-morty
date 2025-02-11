import React from 'react';
import styles from './CharactersList.module.css';
import CharactersCard from '../CharacterCard/CharactersCard.tsx';
import { Character } from '../../api/charactersApi';

type CharactersListProps = {
  characters: Character[];
};

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  return (
    <>
      <p className={styles.foundCharacters}>Found characters: {characters.length}</p>
      <div className={styles.characterList}>
        {characters.map((char) => (
          <CharactersCard key={char.id} character={char} />
        ))}
      </div>
    </>
  );
};

export default CharactersList;
