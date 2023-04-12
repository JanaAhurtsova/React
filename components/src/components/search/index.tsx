import React, { useState, FormEvent } from 'react';
import style from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { search } from '../../redux/reducers/main';

export const SearchBar: React.FC = () => {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>(searchValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(search(value));
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
