import Header from '../../components/header/header';
import React from 'react';
import Form from '../../components/form/form';
import CardListForm from '../../components/cardListForm/cardListForm';
import ICardListForm from '../../components/cardListForm/type';
import ICardForm from '../../components/cardForm/type';

export default class FormPage extends React.Component<unknown, ICardListForm> {
  state: ICardListForm = {
    cards: [],
  };

  addCard(card: ICardForm) {
    this.setState((prevState: ICardListForm) => ({
      cards: [...prevState.cards, card],
    }));
  }

  render() {
    return (
      <>
        <Header title={'Form'} />
        <div className="container">
          <Form addCard={(card: ICardForm) => this.addCard(card)} />
          <CardListForm cards={this.state.cards} />
        </div>
      </>
    );
  }
}
