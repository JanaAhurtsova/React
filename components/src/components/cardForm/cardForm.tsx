import React from 'react';
import ICardForm from './type';
import style from './/style.module.scss';

export default class CardForm extends React.Component<ICardForm> {
  render() {
    return (
      <article className={style.card}>
        <img className={style.card__img} src={this.props.img} alt={this.props.name} />
        <h3>
          {this.props.artist}: {this.props.name}
        </h3>
        <h3>Release: {this.props.date}</h3>
        <h3>Genre: {this.props.genre}</h3>
      </article>
    );
  }
}
