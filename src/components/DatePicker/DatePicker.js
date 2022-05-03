import 'react-day-picker/dist/style.css';
import { useCallback, useState } from "react";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { Box, Button, Input, InputLabel, Popover } from "@mui/material";
import { CalendarMonth } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';

export default DatePicker;

function DatePicker(props) {
  const {
    label,
    onChange,
    value,
    valueFormat,
  } = props;
  
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
    onChange(date);
    onCloseCalendarHandler();
  }, []);

  const formatDate = useCallback((strDate) => {
    return format(new Date(strDate), valueFormat);
  }, [valueFormat]);

  return (
    <Box>
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
          >{label}</InputLabel>
          <Input
            id="calendar-value"
            name="calendar-value"
            value={formatDate(value)}
            disableUnderline
            readOnly
            sx={{ width: '120px' }}
            inputProps={{ style: { cursor: 'pointer' } }}
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
          selected={value}
          onSelect={onCalendarSelectDay}
          mode="single"
          toDate={new Date()}
        />
      </Popover>
    </Box>
  );
}
