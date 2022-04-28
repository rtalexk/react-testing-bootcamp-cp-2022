import { rest } from 'msw';
import { render, screen } from '../../test-utils';
import { server } from '../../mocks/server';
import ImageCardContainer from './ImageCardContainer';
import fakeError from '../../fixtures/fakeError';

test('Should render ImageCard with fakeMedia data', async () => {
  render(<ImageCardContainer />);

  expect(await screen.findByRole('heading')).toHaveTextContent(/jupiter/i);
});

test('Should render an error message if the API request fails', async () => {
  server.use(
    rest.get('https://api.nasa.gov/planetary/apod', (_req, res, ctx) => {
      return res(
        ctx.status(400),
        ctx.json(fakeError),
      );
    })
  );

  render(<ImageCardContainer />);

  expect(await screen.findByRole('heading')).toHaveTextContent(/error/i);
});
