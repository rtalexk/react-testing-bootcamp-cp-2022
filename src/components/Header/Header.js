import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import React, { useCallback, useRef, useState } from 'react';
import { AppBar, Box, Button, Input, InputLabel, Popover, Toolbar, Typography } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';
import { format } from 'date-fns';

import { APP_NAME } from '../../constants';

export default Header;

function Header() {
  const [ date, setDate ] = useState(new Date());
  const [ isCalendarOpen, setCalendarOpen ] = useState(false);
  const [ popoverAnchorEl, setPopoverAnchorEl ] = useState(null);

  const onOpenCalendarHandler = useCallback((ev) => {
    setPopoverAnchorEl(ev.currentTarget);
    setCalendarOpen(true);
  }, []);

  const onCloseCalendarHandler = useCallback(() => {
    setPopoverAnchorEl(null);
    setCalendarOpen(false);
  }, []);

  const onCalendarSelectDay = useCallback((date) => {
    setDate(date);
    onCloseCalendarHandler();
  }, []);

  const formatDate = useCallback((strDate) => {
    return format(new Date(strDate), 'PP');
  }, []);

  return (
    <AppBar color="default" position='sticky'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>{APP_NAME}</Typography>

        <Button
          variant="outlined"
          aria-describedby="calendar-popover"
          onClick={onOpenCalendarHandler}
          color="info"
        >
          <Box display="flex" alignItems="center" rowGap="4">
            <InputLabel
              aria-labelledby="calendar-value"
              htmlFor="calendar-value"
              sx={visuallyHidden}
            >Pick a day</InputLabel>
            <Input
              id="calendar-value"
              name="calendar-value"
              value={formatDate(date)}
              disableUnderline
              readOnly
              sx={{ width: '120px' }}
            />
            <CalendarMonth />
          </Box>
        </Button>

        <Popover
          id="calendar-popover"
          open={isCalendarOpen}
          anchorEl={popoverAnchorEl}
          onClose={onCloseCalendarHandler}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
        >
          <DayPicker
            selected={date}
            onSelect={onCalendarSelectDay}
            mode="single"
            toDate={new Date()}
          />
        </Popover>
      </Toolbar>
    </AppBar>
  );
}
