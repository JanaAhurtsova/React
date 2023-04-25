import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;
import { NameReducer } from '../../../managers/reducers';
import { IFormState } from './type';
import ICardForm from '../../../components/cardForm/type';

const initialState: IFormState = {
  cards: [],
};

export const formSlice = createSlice({
  name: NameReducer.FORM,
  initialState,
  reducers: {
    addCard(state, action: toolkitRaw.PayloadAction<ICardForm>) {
      state.cards.push(action.payload);
    },
  },
});

export default formSlice.reducer;
export const { addCard } = formSlice.actions;
