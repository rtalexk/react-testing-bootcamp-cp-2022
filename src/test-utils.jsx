import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { render } from '@testing-library/react';

function CustomProviders({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  );
}

const customRender = (ui, ...options) =>
  render(ui, { wrapper: CustomProviders }, ...options);

export * from '@testing-library/react';

export { customRender as render };
