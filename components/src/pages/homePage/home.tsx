import React from 'react';
import SearchBar from '../../components/search/searchBar';
import CardList from '../../components/cardList';
import Header from '../../components/header/header';

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header title={'Home'} />
        <div className="container">
          <SearchBar />
          <CardList />
        </div>
      </>
    );
  }
}
