import * as toolkitRaw from '@reduxjs/toolkit';
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
import { ISearchState } from './type';
import { NameReducer } from '../../../managers/reducers';

export const initialState: ISearchState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: NameReducer.SEARCH,
  initialState,
  reducers: {
    search(state, action: toolkitRaw.PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { search } = searchSlice.actions;
