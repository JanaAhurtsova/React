import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISearchState } from './type';
import { NameReducer } from '../../../managers/reducers';

const initialState: ISearchState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: NameReducer.SEARCH,
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { search } = searchSlice.actions;
