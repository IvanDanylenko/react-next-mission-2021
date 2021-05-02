import React, { useState } from 'react';
import addHours from 'date-fns/addHours';
import addMinutes from 'date-fns/addMinutes';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const StepSelectTime: React.FC = () => {
  const minCheckinDateTime = addMinutes(addHours(new Date(), 2), 10);
  const minCheckoutDateTime = addHours(minCheckinDateTime, 4);

  const { checkin, checkout } = useTypedSelector((state) => state.booking);
  const { setCheckin, setCheckout } = useActions();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Please select the time of your booking. The checkin can be only in the next 2 hours. The
          total time of booking must be more than 4 hours.
        </Typography>
        <Grid container justifyContent="space-between">
          <Grid item sx={{ pr: 2 }}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Checkin"
              value={checkin}
              onChange={(newValue) => {
                setCheckin(newValue);
              }}
              minDateTime={minCheckinDateTime}
            />
          </Grid>
          <Grid item>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Checkout"
              value={checkout}
              onChange={(newValue) => {
                setCheckout(newValue);
              }}
              minDateTime={minCheckoutDateTime}
            />
          </Grid>
        </Grid>
      </Container>
    </LocalizationProvider>
  );
};

export default StepSelectTime;
