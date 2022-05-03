import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import DatePicker from '../DatePicker';

import { APP_NAME } from '../../constants';
import { MediaDateContext } from '../../context/MediaDate';

export default Header;

function Header() {
  const { date, setDate } = useContext(MediaDateContext);

  return (
    <AppBar color="default" position='sticky'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>{APP_NAME}</Typography>

        <DatePicker
          label="Pick a day"
          onChange={setDate}
          value={date}
          valueFormat="PP"
        />
      </Toolbar>
    </AppBar>
  );
}
