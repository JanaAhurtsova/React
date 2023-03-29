import React from 'react';
import { Card } from '../card';
import style from './style.module.scss';
import data from '../../data/cards/index.json';

export const CardList: React.FC = () => {
  return (
    <ul className={style.card__list}>
      {data.map((item) => {
        return <Card {...item} key={item.id} />;
      })}
    </ul>
  );
};
