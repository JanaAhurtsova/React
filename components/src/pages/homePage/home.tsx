import React from 'react';
import data from '../../data/data';
import SearchBar from '../../components/search/searchBar';
import CardList from '../../components/cardList';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar value={localStorage.getItem('inputValue') || ''} />
        <CardList cards={data} />
      </div>
    );
  }
}
