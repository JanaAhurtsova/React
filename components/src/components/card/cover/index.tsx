import React from 'react';
import style from './style.module.scss';
import { TCover } from './type';

export const Cover: React.FC<TCover> = (props: TCover) => {
  return (
    <div className={style.cover__wrapper}>
      <img className={style.cover} src={props.cover} alt={props.album} />
    </div>
  );
};
