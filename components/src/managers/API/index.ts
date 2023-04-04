import IData from '../../components/card/type';

const BaseURL = 'https://mock-server-api-xi.vercel.app';
const Data = `${BaseURL}/catalog`;

export const searchInCards = async (value: string) => {
  const response = await fetch(`${Data}?q=${value}`);
  return response.json() as Promise<IData[]>;
};
