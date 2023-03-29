import React from 'react';
import ICardForm from './type';
import style from './/style.module.scss';

export const CardForm: React.FC<ICardForm> = ({ image, name, artist, release, genre }) => {
  return (
    <article className={style.card}>
      <img className={style.card__img} src={image} alt={name} />
      <h3>
        {artist}: {name}
      </h3>
      <h3>Release: {release}</h3>
      <h3>Genre: {genre}</h3>
    </article>
  );
};
