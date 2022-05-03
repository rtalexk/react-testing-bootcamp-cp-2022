import { render, screen } from '../../test-utils';
import { APP_NAME } from '../../constants';
import Header from './Header';

test('Loads and renders the header with the application name', () => {
  render(<Header />);

  expect(screen.getByRole('banner')).toHaveTextContent(APP_NAME);
});

test('Header includes a Calendar', () => {
  render(<Header />);

  expect(screen.getByLabelText(/pick a day/i)).toBeInTheDocument();
});
