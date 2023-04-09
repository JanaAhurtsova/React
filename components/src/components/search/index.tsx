import React from 'react';
import style from './style.module.scss';
import ISearch from './type';

export const SearchBar: React.FC<ISearch> = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        placeholder="Search..."
        autoComplete="off"
        onChange={onChange}
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
