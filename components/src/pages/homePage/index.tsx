import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Storage, Search } from '../../managers/localStorageManager';
import { SearchBar } from '../../components/search';
import { Header } from '../../components/header';
import { getAllCards, searchInCards } from '../../managers/API';
import { CardList } from '../../components/cardList';
import ICardList from '../../components/cardList/type';

export const HomePage: React.FC = () => {
  const [value, searchState] = useState<string>(Storage.getValue(Search, ''));
  const [allCards, setCards] = useState<ICardList>({ cards: [] });
  const valueRef = useRef(value);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    searchState(event.target.value);
  };

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    (async function fetchData() {
      const cards = await getAllCards();
      setCards({ cards: cards });
    })();

    return () => {
      Storage.setValue(Search, valueRef.current);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resultOfSearch = await searchInCards(value);
    setCards({ cards: resultOfSearch });
  };

  return (
    <>
      <Header title={'Home'} />
      <div className="container">
        <SearchBar onChange={inputHandler} value={value} onSubmit={handleSubmit} />
        <CardList cards={allCards.cards} />
      </div>
    </>
  );
};
