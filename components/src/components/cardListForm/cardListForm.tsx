import React from 'react';
import CardForm from '../cardForm/cardForm';
import ICardListForm from './type';
import style from './style.module.scss';

export default class CardListForm extends React.Component<ICardListForm> {
  render() {
    return (
      <section className={style.card__list}>
        {this.props.cards.map((card, ind) => {
          return <CardForm {...card} key={card.name + ind} />;
        })}
      </section>
    );
  }
}
