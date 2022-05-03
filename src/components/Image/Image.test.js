import { render, screen } from '../../test-utils';
import Image from './Image';

test('Should render an image if the src prop is provided', () => {
  const url = 'https://mui.com/static/images/cards/contemplative-reptile.jpg';
  const alt = 'Moon Shadow on Jupiter';

  render(<Image alt={alt} src={url} />);

  const image = screen.getByRole('img');

  expect(image).toBeInTheDocument();
});

test(`Shouldn't render an image if the src prop is not provided`, () => {
  const alt = 'Moon Shadow on Jupiter';

  render(<Image alt={alt} />);

  const image = screen.queryByRole('img');

  expect(image).not.toBeInTheDocument(); 
});

test('Image should be rendered with the given src', () => {
  const url = 'https://mui.com/static/images/cards/contemplative-reptile.jpg';
  const alt = 'Moon Shadow on Jupiter';

  render(<Image alt={alt} src={url} />);

  const image = screen.getByRole('img');

  expect(image).toHaveAttribute('src', url);
});
