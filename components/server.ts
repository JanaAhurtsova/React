import express from 'express';
import { createServer as createViteServer } from 'vite';

const PORT = process.env.PORT || 3001;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    const renderApp = (await vite.ssrLoadModule('./src/entry-server.tsx')).renderApp;
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
