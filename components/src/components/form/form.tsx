import React, { FormEvent } from 'react';

export default class Form extends React.Component {
  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    return <form onSubmit={this.handleSubmit}></form>;
  }
}
