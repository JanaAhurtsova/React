import { ReactNode } from 'react';
import { RootState } from './redux/store';

interface IHtml {
  preloadedState: RootState;
  children: ReactNode;
}

export const Html: React.FC<IHtml> = ({ children, preloadedState }) => {
  const refresh = `
    import RefreshRuntime from 'http://localhost:8000/@react-refresh'
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
  `;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React tasks</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <script type="module" dangerouslySetInnerHTML={{ __html: refresh }}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}`,
          }}
        ></script>
        <script type="module" src="./src/entry-client.tsx"></script>
      </body>
    </html>
  );
};
