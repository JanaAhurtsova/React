import React from 'react';
import { CardForm } from '../cardForm';
import style from './style.module.scss';
import { useAppSelector } from '../../redux/hooks';

export const CardListForm: React.FC = () => {
  const cards = useAppSelector((state) => state.form.cards);

  return (
    <section className={style.card__list}>
      {cards.map((card, index) => {
        return <CardForm {...card} key={card.name + index} />;
      })}
    </section>
  );
};
