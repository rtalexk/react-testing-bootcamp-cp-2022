import { render, screen } from '../../test-utils';
import ImageDetails from './ImageDetails';

test('Should render image details', () => {
  const title = 'Moon Shadow on Jupiter';
  const timestamp = '2022-04-27';
  const details = `What is that large dark spot on Jupiter?`;
  
  render(<ImageDetails title={title} timestamp={timestamp} body={details} />);
  
  const titleEl = screen.getByRole('heading');
  const timestampEl = screen.getByText(timestamp);
  const bodyEl = screen.getByRole('definition');
  
  expect(titleEl).toBeInTheDocument();
  expect(timestampEl).toBeInTheDocument();
  expect(bodyEl).toBeInTheDocument();
});

test('Do not render image details if title is not provided', () => {
  const timestamp = '2022-04-27';
  const details = `What is that large dark spot on Jupiter?`;
  
  render(<ImageDetails timestamp={timestamp} body={details} />);

  const detailsEl = screen.queryByRole('article');
  
  expect(detailsEl).not.toBeInTheDocument();
});

test('Do not render image details if body is not provided', () => {
  const title = 'Moon Shadow on Jupiter';
  const timestamp = '2022-04-27';
  
  render(<ImageDetails title={title} timestamp={timestamp} />);
  
  const detailsEl = screen.queryByRole('article');
  
  expect(detailsEl).not.toBeInTheDocument();
});
