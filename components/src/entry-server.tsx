import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './components/app/App';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { Html } from './html';
import { cardsApi } from './redux/reducers/API';

export const renderApp = async (url: string, opts?: RenderToPipeableStreamOptions) => {
  const store = setupStore({});
  await Promise.all(store.dispatch(cardsApi.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();

  const { pipe } = renderToPipeableStream(
    <Html preloadedState={preloadedState}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </Html>,
    opts
  );
  
  return pipe;
};

