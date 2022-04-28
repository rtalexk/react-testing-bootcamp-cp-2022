import React from 'react';
import { render } from '@testing-library/react';

function CustomProviders({ children }) {
  return (
    <>
      {children}
    </>
  );
}

const customRender = (ui, ...options) =>
  render(ui, { wrapper: CustomProviders }, ...options);

export * from '@testing-library/react';

export { customRender as render };
