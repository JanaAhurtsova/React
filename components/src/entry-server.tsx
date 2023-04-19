import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const renderApp = (url: string, opts?: RenderToPipeableStreamOptions) => {
  const { pipe } = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return pipe;
};
