import React, { FormEvent, useEffect, useState } from 'react';
import { SearchBar } from '../../components/search';
import { Header } from '../../components/header';
import { CardList } from '../../components/cardList';
import ICardList from '../../components/cardList/type';
import { Loader } from '../../components/loader';
import { useSearchCardsQuery } from '../../redux/reducers/API';

export const HomePage: React.FC = () => {
  const [value, searchState] = useState<string>('');
  const [allCards, setCards] = useState<ICardList>({ cards: [] });
  const { data = [], isLoading } = useSearchCardsQuery(value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setCards({ cards: data });
  };

  return (
    <>
      <Header title={'Home'} />
      <div className="container">
        <SearchBar
          onChange={(e) => searchState(e.target.value)}
          value={value}
          onSubmit={handleSubmit}
        />
        {isLoading ? <Loader /> : <CardList cards={data} />}
      </div>
    </>
  );
};
