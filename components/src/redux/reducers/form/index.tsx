import { TPayloadAction, createSlice } from '../../../managers/toolkit';
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
    addCard(state, action: TPayloadAction<ICardForm>) {
      state.cards.push(action.payload);
    },
  },
});

export default formSlice.reducer;
export const { addCard } = formSlice.actions;
