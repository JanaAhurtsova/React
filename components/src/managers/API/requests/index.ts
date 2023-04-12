import { useState, useEffect } from 'react';
import IData from '../../../components/card/type';
import ICardList from '../../../components/cardList/type';

export const BaseURL = 'https://mock-server-api-xi.vercel.app/catalog';

export const useFetchData = (value: string) => {
  const [cards, setCards] = useState<ICardList>({ cards: [] });
  const [isLoading, setLoading] = useState(false);
  const url = !value ? BaseURL : `${BaseURL}?q=${value}`;

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result: IData[] = await response.json();
        setCards({ cards: result });
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [url]);

  return { cards, isLoading };
};

export const getCard = async (id: number) => {
  const response = await fetch(`${BaseURL}/${id}`);
  return response.json() as Promise<IData>;
};
