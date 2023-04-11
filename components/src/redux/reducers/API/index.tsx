import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseURL } from '../../../managers/API';
import IData from '../../../components/card/type';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  tagTypes: ['Cards'],
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
  endpoints: (build) => ({
    searchCards: build.query<IData[], string>({
      query: (value: string) => `catalog?q=${value}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Cards' as const, id })),
              { type: 'Cards', id: 'LIST' },
            ]
          : [{ type: 'Cards', id: 'LIST' }],
    }),
    getCard: build.query<IData, number>({
      query: (id) => `catalog/${id}`,
    }),
  }),
});

export const { useSearchCardsQuery, useGetCardQuery } = cardsApi;
