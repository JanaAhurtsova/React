import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
// import { useAppDispatch } from './src/redux/hooks';
// import { cardsApi } from './src/redux/reducers/API';

// const dispatch = useAppDispatch();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

async function createServer() {
  const app = express();

  // app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    // await Promise.all(dispatch(cardsApi.util.getRunningQueriesThunk()));
    const { renderApp } = await vite.ssrLoadModule('./src/entry-server.tsx');
    const pipe = await renderApp(url, {
      bootstrapModule: ['./src/entry-client.tsx'],
      onShellReady() {
        pipe(res);
      },
      onError(error: Error) {
        console.error(error);
      },
    });
  });

  app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
}

createServer();
