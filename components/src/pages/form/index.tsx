import { Header } from '../../components/header';
import React from 'react';
import { Form } from '../../components/form';
import { CardListForm } from '../../components/cardListForm';
import { useAppSelector } from '../../redux/hooks';

export const FormPage: React.FC = () => {
  const cards = useAppSelector((state) => state.form.cards);

  return (
    <>
      <Header title={'Form'} />
      <div className="container">
        <Form />
        <CardListForm cards={cards} />
      </div>
    </>
  );
};
