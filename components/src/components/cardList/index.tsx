import React from 'react';
import Card from '../card/card';
import style from './style.module.scss';
import data from '../../data/data';

export default class CardList extends React.Component {
  render() {
    return (
      <ul className={style.card__list}>
        {data.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </ul>
    );
  }
}
