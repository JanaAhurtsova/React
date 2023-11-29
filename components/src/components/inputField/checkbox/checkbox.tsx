import React from 'react';
import ICheckbox from './type';
import style from './style.module.scss';

export default class Checkbox extends React.Component<ICheckbox> {
  render() {
    return (
      <div className={style.confirm}>
        <div>
          <input
            className={style.checkbox}
            type="checkbox"
            name={this.props.name}
            ref={this.props.forwardedRef}
          />
          <label className={style.checkbox__label}>{this.props.label}</label>
        </div>
        <span className="error">{this.props.error}</span>
      </div>
    );
  }
}
