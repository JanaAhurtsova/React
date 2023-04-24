import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './components/app/App';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { Html } from './html';
import { cardsApi } from './redux/reducers/API';
const store = setupStore({});

export const renderApp = async (url: string, opts?: RenderToPipeableStreamOptions) => {
  await store.dispatch(cardsApi.endpoints.searchCards.initiate(''));
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

