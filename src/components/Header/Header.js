import React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';

import { APP_NAME } from '../../constants';

export default Header;

function Header() {
  return (
    <AppBar color='transparent' position='sticky'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>{APP_NAME}</Typography>
        <DatePicker
          label="Pick a day"
          onChange={() => {}}
          renderInput={(params) => <TextField variant='standard' {...params} />}
          maxDate={new Date()}
        />
      </Toolbar>
    </AppBar>
  );
}
