import React from 'react';
import TOptions from './type';
import style from './style.module.scss';
import { SelectElement } from '../../../managers/hiddenElement';

export const Select: React.FC<TOptions> = ({
  label,
  defaultValue,
  genre,
  register,
  genres,
  error,
}) => {
  return (
    <div className={style.select__wrapper}>
      <label>{label}</label>
      <select className={style.select} defaultValue={defaultValue} {...register(genre)}>
        {genres.map((genre) => {
          return (
            <option key={genre} value={genre} hidden={genre === SelectElement}>
              {genre}
            </option>
          );
        })}
      </select>
      <span className="error">{error?.message}</span>
    </div>
  );
};
