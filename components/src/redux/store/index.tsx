import * as toolkitRaw from '@reduxjs/toolkit';
import { cardsApi } from '../reducers/API';
import searchReducer from '../reducers/main';
import formReducer from '../reducers/form';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

export const rootReducer = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
  search: searchReducer,
  form: formReducer,
});

export const setupStore = (preloadedState?: toolkitRaw.PreloadedState<ReturnType<typeof rootReducer>>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
  });

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
