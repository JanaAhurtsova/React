import { rest } from 'msw';
import { BaseURL } from '../../API';
import data from '../../../data/cards/index.json';

export const handlers = [
  rest.get(BaseURL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.get(BaseURL, (req, res, ctx) => {
    const query = req.url.searchParams.get('q');
    if (query === 'panic') {
      return res(ctx.status(200), ctx.json(data[0]));
    }

    return req.passthrough();
  }),
  rest.get(`${BaseURL}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(data[Number(id) - 1]));
  }),
];
