import { render, screen } from "../../test-utils";
import Footer from './Footer';

test('Render a footer with information about the project', () => {
  render(<Footer />);

  const footer = screen.getByRole('contentinfo');

  expect(footer).toHaveTextContent(/wizeline academy/i);
});
