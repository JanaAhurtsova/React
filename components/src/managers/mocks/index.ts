import { rest } from 'msw';
import { Catalog } from '../API/requests';

export const Cards = [
  {
    id: 1,
    artist: 'Panic! At The Disco',
    album: 'Pray for the Wicked',
    released: 2018,
    label: 'Fueled by Ramen',
    location: 'U.S.',
    genre: ['pop', 'pop rock'],
    cover:
      'https://e.snmc.io/i/600/w/b2c405fb03b07130a88984627c152eba/7145436/panic-at-the-disco-pray-for-the-wicked-Cover-Art.jpg',
    profile:
      "American rock band from Las Vegas, Nevada. US. Formed in 2004, became a Brendon Urie solo project in 2015 before 'becoming no more' on January 24th 2023.",
  },
  {
    id: 2,
    artist: 'Smash into pieces',
    album: 'Disconnect',
    released: 2022,
    label: '',
    location: 'Sweden',
    genre: ['alternative rock'],
    cover:
      'https://t2.genius.com/unsafe/561x0/https%3A%2F%2Fimages.genius.com%2F5fb654ad0a6ae16d00f525b3a0cd7846.1000x1000x1.jpg',
    profile: 'Alternative Rock Band from Sweden.',
  },
];

export const handlers = [
  rest.get(`${Catalog}`, (req, res, ctx) => {
    const query = req.url.searchParams.get('q');
    if (!query) {
      return res(ctx.status(200), ctx.json(Cards));
    }
    if (query === 'panic') {
      return res(ctx.status(200), ctx.json(Cards[0]));
    }

    return req.passthrough();
  }),
  rest.get(`${Catalog}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(Cards[Number(id) - 1]));
  }),
];

type TStore = {
  [key: string]: string;
};

export class LocalStorageMock {
  store: TStore;
  constructor() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key];
  }

  setItem(key: string, value: string) {
    this.store[key] = value;
  }

  clear() {
    this.store = {};
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}
