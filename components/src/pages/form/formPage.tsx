import Header from '../../components/header/header';
import React from 'react';
import Form from '../../components/form/form';

export default class FormPage extends React.Component {
  render() {
    return (
      <>
        <Header title={'Form'} />
        <div className="container">
          <Form />
        </div>
      </>
    );
  }
}
