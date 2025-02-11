import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import debounce from 'lodash.debounce';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

type FormValues = {
  searchQuery: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query.length > 3 ? query : '');
    }, 300),
    [onSearch],
  );

  return (
    <div className={styles.searchContainer}>
      <input
        autoComplete={'off'}
        type="text"
        placeholder="Search characters..."
        className={styles.searchInput}
        {...register('searchQuery', {
          minLength: {
            value: 4,
            message: 'Enter at least 4 characters',
          },
        })}
        onChange={(e) => {
          setValue('searchQuery', e.target.value, { shouldValidate: true });
          debouncedSearch(e.target.value);
        }}
        autoFocus
      />
      {errors.searchQuery && <div className={styles.errorText}>{errors.searchQuery.message}</div>}
    </div>
  );
};

export default SearchBar;
