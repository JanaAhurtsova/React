import React from 'react';
import CardForm from '../cardForm/cardForm';
import ICardListForm from './type';

export default class CardListForm extends React.Component<ICardListForm> {
  render() {
    return (
      <section>
        {this.props.cards.map((card) => {
          return <CardForm {...card} key={card.name} />;
        })}
      </section>
    );
  }
}
