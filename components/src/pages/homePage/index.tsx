import React from 'react';
import { SearchBar } from '../../components/search';
import { CardList } from '../../components/cardList';
import { Header } from '../../components/header';

export const HomePage: React.FC = () => {
  return (
    <>
      <Header title={'Home'} />
      <div className="container">
        <SearchBar />
        <CardList />
      </div>
    </>
  );
};
