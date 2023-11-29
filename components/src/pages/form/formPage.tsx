import Header from '../../components/header/header';
import React from 'react';
import Form from '../../components/form/form';
import CardListForm from '../../components/cardListForm/cardListForm';
import ICardForm from '../../components/cardForm/type';
import IFormPage from './type';
import Modal from '../../components/modal/modal';

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
      setTimeout(() => {
        this.setState({ showModal: false });
      }, 2500);
    }
  }

  addCard(card: ICardForm) {
    this.setState({ showModal: true });
    setTimeout(() => {
      this.setState((prevState: IFormPage) => ({
        cards: [...prevState.cards, card],
      }));
    }, 2600);
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
