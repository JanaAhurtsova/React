import React from 'react';
import ICardForm from './type';

export default class CardForm extends React.Component<ICardForm> {
  render() {
    return (
      <article>
        <img src={this.props.img} alt={this.props.name} />
        <h3>{this.props.name}</h3>
        <h3>{this.props.gender}</h3>
        <h3>{this.props.date}</h3>
        <h3>{this.props.country}</h3>
      </article>
    );
  }
}
