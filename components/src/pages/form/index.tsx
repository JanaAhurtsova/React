import { Header } from '../../components/header';
import React from 'react';
import { Form } from '../../components/form';
import { CardListForm } from '../../components/cardListForm';
import ICardForm from '../../components/cardForm/type';
import IFormPage from './type';
import { Modal } from '../../components/modal';

export default class FormPage extends React.Component<object, IFormPage> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      showModal: false,
    };
  }

  componentDidUpdate() {
    if (this.state.showModal) {
      const modalShowTime = 2500;
      setTimeout(() => {
        this.setState({ showModal: false });
      }, modalShowTime);
    }
  }

  addCard(card: ICardForm) {
    this.setState({ showModal: true });
    const delayedTimeToShowCard = 2600;
    setTimeout(() => {
      this.setState((prevState: IFormPage) => ({
        cards: [...prevState.cards, card],
      }));
    }, delayedTimeToShowCard);
  }

  render() {
    return (
      <>
        <Header title={'Form'} />
        <div className="container">
          <Form addCard={(card: ICardForm) => this.addCard(card)} />
          <CardListForm cards={this.state.cards} />
          {this.state.showModal && <Modal />}
        </div>
      </>
    );
  }
}
