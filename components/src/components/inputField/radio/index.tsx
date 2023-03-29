import React from 'react';
import IRadio from './type';
import style from './style.module.scss';

export const Radio: React.FC<IRadio> = ({ register, name, error, artists }) => {
  return (
    <div className={style.radios}>
      <label>Artist:</label>
      <div className={style.radio}>
        {artists.map((artist, i) => {
          return (
            <div key={artist + i}>
              <input className={style.input} type="radio" value={artist} {...register(name)} />
              <label>{artist}</label>
            </div>
          );
        })}
      </div>
      <span className="error">{error?.message}</span>
    </div>
  );
};
