import React from 'react';
import style from './style.module.css';
import { TGenre } from './type';

export default class Genre extends React.Component<TGenre> {
  render() {
    return <span className={style.genre}>{this.props.genre}</span>;
  }
}
