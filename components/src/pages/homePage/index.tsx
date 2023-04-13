import React from 'react';
import { SearchBar } from '../../components/search';
import { Header } from '../../components/header';
import { CardList } from '../../components/cardList';

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
