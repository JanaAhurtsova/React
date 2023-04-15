import React, { useState, FormEvent } from 'react';
import style from './style.module.scss';
import { useSearchEvent } from '../../redux/hooks';

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const { search } = useSearchEvent({ setValue });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={style.search}
        autoFocus={true}
      />
      <button className={style.submit} type="submit">
        Search
      </button>
    </form>
  );
};
