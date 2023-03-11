import React from 'react';
import data from '../../data/data';
import Card from '../../components/card/card';
import IData from '../../components/card/type';
import SearchBar from '../../components/search/searchBar';

export default class HomePage extends React.Component {
  state = {
    cards: [],
  };

  render() {
    return (
      <div className="container">
        <SearchBar />
        <>
          {data.map((item) => {
            <Card {...item} key={item.id} />;
          })}
        </>
      </div>
    );
  }
}
