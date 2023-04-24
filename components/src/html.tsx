import { ReactNode } from 'react';
import { RootState } from './redux/store';

interface IHtml {
  preloadedState: RootState;
  children: ReactNode;
}

export const Html: React.FC<IHtml> = ({ children, preloadedState }) => {
  const refresh = `
    import RefreshRuntime from 'http://localhost:3001/@react-refresh'
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
        {/* <link rel="stylesheet" href="./src/components/App.scss"></link>
        <link rel="stylesheet" href="./src/components/card/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/card/cover/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/card/genre/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/cardForm/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/cardList/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/cardListForm/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/footer/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/form/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/header/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/inputField/checkbox/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/inputField/input/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/inputField/radio/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/inputField/select/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/loader/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/modal/formMessage/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/modal/modalCard/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/search/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/pages/about/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/pages/form/style.module.scss"></link>
        <link rel="stylesheet" href="./src/components/pages/homePage/style.module.scss"></link> */}
      </head>
      <body >
        <div id="root">{children}</div>
        <script type="module" dangerouslySetInnerHTML={{__html: refresh}}></script>
        <script dangerouslySetInnerHTML={{__html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}`}}></script>
        <script type="module" src="./src/entry-client.tsx"></script>
      </body>
    </html>
  );
};
