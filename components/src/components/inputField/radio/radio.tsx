import React from 'react';
import IRadio from './type';
import style from './style.module.scss';

export default class Radio extends React.Component<IRadio> {
  render() {
    return (
      <div>
        <input
          className={style.input}
          type="radio"
          name={this.props.name}
          ref={this.props.forwardedRef}
        />
        <label>{this.props.label}</label>
      </div>
    );
  }
}
