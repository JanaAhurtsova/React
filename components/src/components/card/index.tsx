import React from 'react';
import { Genre } from './genre';
import IData from './type';
import { Cover } from './cover';
import style from './style.module.scss';

export const Card: React.FC<IData> = (props: IData) => {
  return (
    <li className={style.card} key={String(props.id)}>
      <Cover cover={props.cover} album={props.album} />
      <div className={style.card__description}>
        <h3>{props.artist}</h3>
        <h4>{props.album}</h4>
        <div className={style.info}>
          <span>{props.released}</span>
          <span>{props.location}</span>
          <span>{props.label}</span>
        </div>
        <div className={style.genres}>
          {props.genre.map((genre) => {
            return <Genre genre={genre} key={props.album + genre} />;
          })}
        </div>
      </div>
    </li>
  );
};
