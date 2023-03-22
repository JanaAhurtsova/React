import React from 'react';
import TOptions from './type';
import style from './style.module.scss';

export default class Select extends React.Component<TOptions> {
  render() {
    return (
      <div className={style.select__wrapper}>
        <label>{this.props.title}</label>
        <select
          className={style.select}
          defaultValue={this.props.defaultValue}
          ref={this.props.forwardedRef}
        >
          {this.props.genres.map((genre) => {
            return (
              <option key={genre.value} value={genre.value} hidden={genre.hidden}>
                {genre.value}
              </option>
            );
          })}
        </select>
        <span className="error">{this.props.error}</span>
      </div>
    );
  }
}
