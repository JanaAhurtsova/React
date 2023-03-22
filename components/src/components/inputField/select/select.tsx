import React from 'react';
import TOptions from './type';
import style from './style.module.scss';

export default class Select extends React.Component<TOptions> {
  render() {
    return (
      <div className={style.select__wrapper}>
        <label>{this.props.title}</label>
        <select className={style.select} defaultValue={this.props.defaultValue}>
          {this.props.countries.map((country) => {
            return <option key={country}>{country}</option>;
          })}
        </select>
        <span className="error">{this.props.error}</span>
      </div>
    );
  }
}
