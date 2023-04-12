import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseURL } from '../../../managers/API';
import IData from '../../../components/card/type';
import { NameReducer } from '../../../managers/reducers';

export const cardsApi = createApi({
  reducerPath: NameReducer.CARDS_API,
  tagTypes: [NameReducer.CARDS],
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
  endpoints: (build) => ({
    searchCards: build.query<IData[], string>({
      query: (value: string) => `${value && `?q=${value}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: NameReducer.CARDS as const, id })),
              { type: NameReducer.CARDS, id: NameReducer.LIST },
            ]
          : [{ type: NameReducer.CARDS, id: NameReducer.LIST }],
    }),
    getCard: build.query<IData, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useSearchCardsQuery, useGetCardQuery } = cardsApi;
