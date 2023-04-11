import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICardsState } from './type';

const initialState: ICardsState = {
  cards: [],
  isLoading: false,
  error: '',
  searchValue: '',
};

export const cardsSlice = createSlice({
  name: 'Cards',
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export default cardsSlice.reducer;
