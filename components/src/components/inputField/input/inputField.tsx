import React from 'react';
import IInputField from './type';
import style from './style.module.scss';

export default class InputField extends React.Component<IInputField> {
  render() {
    return (
      <div className={style.input__wrapper}>
        <label>{this.props.label}</label>
        <input
          className={style.input}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          ref={this.props.forwardedRef}
        />
        <span className="error">{this.props.error}</span>
      </div>
    );
  }
}
