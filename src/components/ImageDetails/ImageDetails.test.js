import { render, screen } from '../../test-utils';
import ImageDetails from './ImageDetails';

test('Should render image details', () => {
  const title = 'Moon Shadow on Jupiter';
  const timestamp = '2022-04-27';
  const details = `What is that large dark spot on Jupiter? It's the shadow of Io, one of Jupiter's largest moons. When Jupiter's moons cross between the Jovian giant and the Sun, they created shadows just like when the Earth's moon crosses between the Earth and the Sun. Also like on Earth, if you were in a dark shadow on Jupiter, you would see a moon completely eclipse the Sun. Unlike on Earth, moon shadows occur most days on Jupiter -- what's more unusual is that a spacecraft was close enough to record one with a high-resolution image.  That spacecraft, Juno, was passing so close to Jupiter in late February that nearby clouds and the dark eclipse shadow appear relatively large. Juno has made many discoveries about our Solar System's largest planet, including, recently, rapidly expanding circular auroras.   Explore Your Universe: Random APOD Generator`;

  render(<ImageDetails title={title} timestamp={timestamp} details={details} />);

  const titleEl = screen.getByRole('heading');
  const timestampEl = screen.getByText(timestamp);
  const detailsEl = screen.getByRole('paragraph');

  expect(titleEl).toBeInTheDocument();
  expect(timestampEl).toBeInTheDocument();
  expect(detailsEl).toBeInTheDocument();
});
