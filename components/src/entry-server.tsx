import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Html } from './html';

const preloadedState = store.getState();

export const renderApp = (url: string, opts?: RenderToPipeableStreamOptions) => {
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
