import { render, screen } from './test-utils';
import App from './App';

import { APP_NAME } from './constants';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(APP_NAME);
  expect(linkElement).toBeInTheDocument();
});
