import React from 'react';
import ICardList from './type';
import Card from '../card/card';
import style from './style.module.css';

export default class CardList extends React.Component<ICardList> {
  constructor(props: ICardList) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  render() {
    return (
      <ul className={style.card__list}>
        {this.props.cards.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </ul>
    );
  }
}
