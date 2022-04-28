import { render, screen } from '../../test-utils';
import ImageCard from './ImageCard';

test('Should render Image alongside ImageDetails', () => {
  const imageProps = {
    "date": "2022-04-27",
    "explanation": "What is that large dark spot on Jupiter?",
    "hdurl": "https://apod.nasa.gov/apod/image/2204/JupiterDarkSpot_JunoTT_3298.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Moon Shadow on Jupiter",
    "url": "https://apod.nasa.gov/apod/image/2204/JupiterDarkSpot_JunoTT_1080.jpg"
  };

  render(<ImageCard media={imageProps} />);

  const imageEl = screen.getByRole('img');
  const titleEl = screen.getByRole('heading');

  expect(imageEl).toBeInTheDocument();
  expect(titleEl).toBeInTheDocument();
});

test('Should render an error if error prop is provided', () => {
  const error = {
    code: 400,
    msg: "time data '2022/04/05' does not match format '%Y-%m-%d'",
    service_version: "v1"
  }

  render(<ImageCard error={error} />);

  const errorEl = screen.getByRole('heading');

  expect(errorEl).toHaveTextContent(/error/i);
})
