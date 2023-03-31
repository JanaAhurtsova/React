import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import style from './style.module.scss';

export const SearchBar: React.FC = () => {
  const [value, searchState] = useState<string>(localStorage.getItem('search') || '');
  const valueRef = useRef(value);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    searchState(event.target.value);
    valueRef.current = value;
  };

  useEffect(() => {
    searchState(localStorage.getItem('search') || '');
    return () => {
      localStorage.setItem('search', valueRef.current);
    };
  }, []);

  return (
    <div>
      <input
        type="search"
        placeholder="Search..."
        autoComplete="off"
        onChange={inputHandler}
        value={value}
        className={style.search}
      />
    </div>
  );
};
