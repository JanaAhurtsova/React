import React from 'react';
import { CardForm } from '../cardForm';
import { ICardListForm } from './type';
import style from './style.module.scss';

export const CardListForm: React.FC<ICardListForm> = (props: ICardListForm) => {
  return (
    <section className={style.card__list}>
      {props.cards.map((card, ind) => {
        return <CardForm {...card} key={card.name + ind} />;
      })}
    </section>
  );
};
