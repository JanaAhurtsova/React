import React from 'react';
import TOptions from './type';
import style from './style.module.scss';

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
            <option key={genre} value={genre} hidden={genre === genres[0] ? true : false}>
              {genre}
            </option>
          );
        })}
      </select>
      <span className="error">{error?.message}</span>
    </div>
  );
};
