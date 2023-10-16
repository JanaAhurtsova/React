import React from 'react';
import style from './style.module.scss';
import { TCover } from './type';

export default class Cover extends React.Component<TCover> {
  render() {
    return (
      <div className={style.cover__wrapper}>
        <img className={style.cover} src={this.props.cover} alt={this.props.album} />
      </div>
    );
  }
}
