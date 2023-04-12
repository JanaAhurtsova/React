import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cardsApi } from '../reducers/API';
import searchReducer from '../reducers/main';
import formReducer from '../reducers/form';

const rootReducer = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
  search: searchReducer,
  form: formReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
