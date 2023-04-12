import React from 'react';
import { SearchBar } from '../../components/search';
import { Header } from '../../components/header';
import { CardList } from '../../components/cardList';
import { Loader } from '../../components/loader';
import { useSearchCardsQuery } from '../../redux/reducers/API';
import { useAppSelector } from '../../redux/hooks';

export const HomePage: React.FC = () => {
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const { data = [], isFetching } = useSearchCardsQuery(searchValue);

  return (
    <>
      <Header title={'Home'} />
      <div className="container">
        <SearchBar />
        {isFetching ? <Loader /> : <CardList cards={data} />}
      </div>
    </>
  );
};
