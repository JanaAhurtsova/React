import React, { ChangeEvent } from 'react';
import style from './style.module.scss';
import TSearchState from './type';

export default class SearchBar extends React.Component {
  state: TSearchState = {
    inputValue: localStorage.getItem('search') || '',
  };

  componentWillUnmount() {
    localStorage.setItem('search', this.state.inputValue);
  }

  inputHandler(event: ChangeEvent<HTMLInputElement>) {
    return this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search..."
          autoComplete="off"
          onChange={this.inputHandler.bind(this)}
          value={this.state.inputValue}
          className={style.search}
        />
      </div>
    );
  }
}
