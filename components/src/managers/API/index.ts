import IData from '../../components/card/type';

const BaseURL = 'https://mock-server-api-xi.vercel.app';
const Data = `${BaseURL}/catalog`;

export const searchInCards = async (value: string) => {
  const response = await fetch(`${Data}?q=${value}`);
  return response.json() as Promise<IData[]>;
};

export const getCard = async (id: number) => {
  const response = await fetch(`${Data}/${id}`);
  return response.json() as Promise<IData>;
};

export const sortCards = async (sortParam: string) => {
  const response = await fetch(`${Data}?_sort=${sortParam}`);
  return response.json() as Promise<IData[]>;
};

export const pagination = async (page: number, limit: number) => {
  const response = await fetch(`${Data}?_page=${page}&_limit=${limit}`);
  return response.json() as Promise<IData[]>;
};
