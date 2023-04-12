import React, { useState } from 'react';
import { Storage, Search } from '../../managers/localStorageManager';
import { SearchBar } from '../../components/search';
import { Header } from '../../components/header';
import { useFetchData } from '../../managers/API/requests';
import { CardList } from '../../components/cardList';
import { Loader } from '../../components/loader';

export const HomePage: React.FC = () => {
  const [value, setSearch] = useState<string>(Storage.getValue(Search, ''));
  const { cards, isLoading } = useFetchData(value);

  return (
    <>
      <Header title={'Home'} />
      <div className="container">
        <SearchBar setState={setSearch} />
        {isLoading ? <Loader /> : <CardList cards={cards.cards} />}
      </div>
    </>
  );
};
