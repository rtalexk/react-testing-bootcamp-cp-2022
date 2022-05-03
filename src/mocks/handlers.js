import { rest } from 'msw';
import fakeMedia from '../fixtures/fakeMedia';

export const handlers = [
  rest.get('https://api.nasa.gov/planetary/apod', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(fakeMedia),
    );
  }),
];
