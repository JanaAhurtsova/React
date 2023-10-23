import { Header } from '../../components/header';
import React from 'react';
import { Form } from '../../components/form';
import { CardListForm } from '../../components/cardListForm';

export const FormPage: React.FC = () => {
  return (
    <>
      <Header title={'Form'} />
      <div className="container">
        <Form />
        <CardListForm />
      </div>
    </>
  );
};
