import { render, screen } from '../../test-utils';
import ImageCardContainer from './ImageCardContainer';

test('Should render ImageCard with fakeMedia data', async () => {
  render(<ImageCardContainer />);

  expect(await screen.findByRole('heading')).toHaveTextContent(/jupiter/i);
});
