import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameReducer } from '../../../managers/reducers';
import { IFormState } from './type';
import ICardForm from '../../../components/cardForm/type';

const initialState: IFormState = {
  cards: [],
  isLoading: false,
  cardInfo: {
    image: '',
    name: '',
    release: '',
    genre: '',
    artist: '',
  },
};

export const formSlice = createSlice({
  name: NameReducer.FORM,
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<ICardForm>) {
      state.cards.push(action.payload);
    },
  },
});

export default formSlice.reducer;
export const { addCard } = formSlice.actions;
