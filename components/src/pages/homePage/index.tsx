import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Storage, Search } from '../../managers/localStorageManager';
import { SearchBar } from '../../components/search';
import { Header } from '../../components/header';
import { searchInCards } from '../../managers/API/requests';
import { CardList } from '../../components/cardList';
import ICardList from '../../components/cardList/type';
import { Loader } from '../../components/loader';

export const HomePage: React.FC = () => {
  const [value, searchState] = useState<string>(Storage.getValue(Search, ''));
  const [allCards, setCards] = useState<ICardList>({ cards: [] });
  const [isLoading, setIsLoading] = useState(true);
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const resultOfSearch = await searchInCards(value);
      setCards({ cards: resultOfSearch });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [value]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const resultOfSearch = await searchInCards(value);
      setCards({ cards: resultOfSearch });
      Storage.setValue(Search, value);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
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
        {isLoading ? <Loader /> : <CardList cards={allCards.cards} />}
      </div>
    </>
  );
};
