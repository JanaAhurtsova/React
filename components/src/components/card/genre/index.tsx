import React from 'react';
import style from './style.module.scss';
import { TGenre } from './type';

export const Genre: React.FC<TGenre> = (props: TGenre) => {
  return <span className={style.genre}>{props.genre}</span>;
};
