import IData from '../../components/card/type';

const BaseURL = 'https://mock-server-api-xi.vercel.app';
const Data = `${BaseURL}/catalog`;

export const getAllCards = async () => {
  const response = await fetch(Data);
  return response.json() as Promise<IData[]>;
};

export const searchInCards = async (value: string) => {
  const response = await fetch(`${Data}?q=${value}`);
  return response.json() as Promise<IData[]>;
};

export const showCards = async (value: string) => {
  if (!value) {
    const cards = await getAllCards();
    return { cards: cards };
  } else {
    const cards = await searchInCards(value);
    return { cards: cards };
  }
};
