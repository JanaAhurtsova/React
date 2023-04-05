import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { Storage, Search } from '../../managers/localStorageManager';

export const SearchBar: React.FC = () => {
  const [value, searchState] = useState<string>(Storage.getValue(Search, ''));
  const valueRef = useRef(value);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    searchState(event.target.value);
  };

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      Storage.setValue(Search, valueRef.current);
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
        autoFocus={true}
      />
    </div>
  );
};
