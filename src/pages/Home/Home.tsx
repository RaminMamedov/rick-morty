import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useGetCharactersByNameQuery } from '../../api/charactersApi';
import styles from './Home.module.css';
import Loader from '../../components/Loader/Loader.tsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.tsx';
import CharactersList from '../../components/CharactersList/CharactersList.tsx';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: characters = [],
    isFetching,
    isError,
    error,
    isSuccess,
  } = useGetCharactersByNameQuery(searchQuery, {
    skip: searchQuery.length <= 3,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  return (
    <div className={styles.home}>
      <SearchBar onSearch={setSearchQuery} />
      {isFetching && <Loader />}
      {isError && <ErrorMessage error={error} />}
      {isSuccess && characters.length > 0 && <CharactersList characters={characters} />}
    </div>
  );
};

export default Home;
