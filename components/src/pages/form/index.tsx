import { Header } from '../../components/header';
import React, { useState } from 'react';
import { Form } from '../../components/form';
import { CardListForm } from '../../components/cardListForm';
import ICardForm from '../../components/cardForm/type';
import { Modal } from '../../components/modal/formMessage';
import { DelayedTimeToShowCard } from '../../managers/timers';

export const FormPage: React.FC = () => {
  const [cards, cardsState] = useState<ICardForm[]>([]);
  const [modal, modalState] = useState(false);

  const addCard = (card: ICardForm) => {
    modalState(true);
    setTimeout(() => {
      cardsState([...cards, card]);
    }, DelayedTimeToShowCard);
  };

  return (
    <>
      <Header title={'Form'} />
      <div className="container">
        <Form addCard={(card: ICardForm) => addCard(card)} modalState={modalState} />
        <CardListForm cards={cards} />
        {modal && <Modal />}
      </div>
    </>
  );
};
