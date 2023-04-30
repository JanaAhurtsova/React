import { TPayloadAction, createSlice } from '../../../managers/toolkit';
import { ISearchState } from './type';
import { NameReducer } from '../../../managers/reducers';

export const initialState: ISearchState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: NameReducer.SEARCH,
  initialState,
  reducers: {
    search(state, action: TPayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { search } = searchSlice.actions;
