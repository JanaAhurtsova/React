import '@testing-library/jest-dom';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BaseURL } from '../managers/API';
import data from '../data/cards/index.json';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

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

export const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
