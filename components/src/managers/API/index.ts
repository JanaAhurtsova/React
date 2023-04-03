const BaseURL = 'https://mock-server-api-xi.vercel.app';
const Data = `${BaseURL}/catalog`;

export const getAllCards = async () => {
  const response = await fetch(Data);
  return response.json();
};

export const searchInCards = async (value: string) => {
  const response = await fetch(`${Data}?q=${value}`);
  return response.json();
};
