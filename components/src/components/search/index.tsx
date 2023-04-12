import React, { FormEvent, useState } from 'react';
import { Storage, Search } from '../../managers/localStorageManager';
import style from './style.module.scss';
import ISearch from './type';

export const SearchBar: React.FC<ISearch> = ({ setState }) => {
  const [value, setValue] = useState<string>(Storage.getValue(Search, ''));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(value);
    Storage.setValue(Search, value);
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
