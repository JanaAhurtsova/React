import { cardsApi } from '../reducers/API';
import searchReducer from '../reducers/main';
import formReducer from '../reducers/form';
import { configureStore, combineReducers, TPreloadedState } from '../../managers/toolkit';

export const rootReducer = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
  search: searchReducer,
  form: formReducer,
});

export const setupStore = (preloadedState?: TPreloadedState<ReturnType<typeof rootReducer>>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ immutableCheck: false }).concat(cardsApi.middleware),
  });

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
