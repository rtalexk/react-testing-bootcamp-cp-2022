import React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { APP_NAME } from '../../constants';

export default Header;

function Header() {
  return (
    <header>
      {APP_NAME}
      <DatePicker
        label="Pick a day"
        onChange={() => {}}
        renderInput={(params) => <TextField {...params} />}
      />
    </header>
  );
}


