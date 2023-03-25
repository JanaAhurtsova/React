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
    this.showModal = this.showModal.bind(this);
  }

  componentDidUpdate() {
    if (this.state.showModal) {
      setTimeout(() => {
        this.setState({ showModal: false });
      }, 3000);
    }
  }

  showModal() {
    this.setState({ showModal: true });
  }

  addCard(card: ICardForm) {
    this.setState((prevState: IFormPage) => ({
      cards: [...prevState.cards, card],
    }));
  }

  render() {
    return (
      <>
        <Header title={'Form'} />
        <div className="container">
          <Form addCard={(card: ICardForm) => this.addCard(card)} showModal={this.showModal} />
          <CardListForm cards={this.state.cards} />
          {this.state.showModal && <Modal />}
        </div>
      </>
    );
  }
}
