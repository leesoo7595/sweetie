import {resolve} from 'path';

import debug from 'debug';
import express, {Request} from 'express';
import next from 'next';
import nextRoutes from 'next-routes';

const log = debug('Sweetie:Application');

const routes = new nextRoutes().add({
  name: 'home',
  pattern: '/home',
  page: resolve(__dirname, 'pages', 'Home')
});

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  log('prepare');
  const server = express();

  server.get('/home', (req, res) => {
    log('get', req.route);
    return app.render(req, res, '/Home', req.query);
  });

  server.route('*').get((req, res) => handler(req, res));

  server.listen(port, err => {
    if (err) throw err;
    log(`> Ready on http://localhost:${port}`);
  });
});