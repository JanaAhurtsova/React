import React from 'react';
import { Card } from '../card';
import style from './style.module.scss';
import ICardList from './type';

export const CardList: React.FC<ICardList> = ({ cards }) => {
  if (!cards.length) {
    return <div>No cards found</div>;
  }
  return (
    <ul className={style.card__list}>
      {cards.map((card) => {
        return <Card {...card} key={card.id} />;
      })}
    </ul>
  );
};
