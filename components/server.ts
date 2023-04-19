import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

async function createServer() {
  const app = express();

  app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    let template = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();
    template = await vite.transformIndexHtml(url, template);
    const { renderApp } = await vite.ssrLoadModule('./src/entry-server.tsx');
    const html = template.split(`<!--ssr-outlet-->`);
    const pipe = await renderApp(url, {
      bootstrapModule: ['./src/entry-client.tsx'],
      onShellReady() {
        res.write(html[0]);
        pipe(res);
      },
      onAllReady() {
        res.write(html[1]);
        res.end();
      },
      onError(error: Error) {
        console.error(error);
      },
    });
  });

  app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
}

createServer();
