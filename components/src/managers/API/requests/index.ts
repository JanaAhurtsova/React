import IData from '../../../components/card/type';
import { BaseURL } from '..';
export const Catalog = `${BaseURL}/catalog`;

export const getCards = async () => {
  const response = await fetch(Catalog);
  return response.json() as Promise<IData[]>;
};

export const searchInCards = async (value: string) => {
  const response = await fetch(`${Catalog}?q=${value}`);
  return response.json() as Promise<IData[]>;
};

export const getCard = async (id: number) => {
  const response = await fetch(`${Catalog}/${id}`);
  return response.json() as Promise<IData>;
};
