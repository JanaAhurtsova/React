import React, { ChangeEvent } from 'react';

export default class SearchBar extends React.Component {
  state = {
    inputValue: localStorage.getItem('search') || '',
  };

  componentWillUnmount() {
    localStorage.setItem('search', this.state.inputValue);
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search"
          autoComplete="off"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            return this.setState({ inputValue: event.target.value });
          }}
          autoFocus={true}
          value={this.state.inputValue}
        />
      </div>
    );
  }
}
