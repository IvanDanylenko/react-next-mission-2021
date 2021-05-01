import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { format } from 'date-fns';
import { Box, Typography } from '@material-ui/core';
import Map from '../Map';

const StepShowSummary: React.FC = () => {
  const { checkin, checkout } = useTypedSelector((state) => state.booking);
  return (
    <Box>
      <Typography variant="body1" color="primary">
        <b>Checkin Time: &nbsp;</b>
        {checkin ? format(checkin, 'dd MMMM yyyy HH:mm') : 'not available'}
      </Typography>
      <Typography variant="body1" color="primary" gutterBottom>
        <b>Checkout Time: &nbsp;</b>
        {checkout ? format(checkout, 'dd MMMM yyyy HH:mm') : 'not available'}
      </Typography>
      <Map />
    </Box>
  );
};

export default StepShowSummary;
