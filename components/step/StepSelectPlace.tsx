import React from 'react';
import dynamic from 'next/dynamic';
import { Typography, Grid } from '@material-ui/core';

const MapWithNoSSR = dynamic(() => import('../Map'), {
  ssr: false,
});

const AutocompleteBoxWithNoSSR = dynamic(() => import('../AutocompleteBox'), {
  ssr: false,
});

const StepSelectPlace: React.FC = () => {
  return (
    <div>
      <Typography variant="body1" gutterBottom>
        Please, select place on the map.
      </Typography>
      <Typography variant="body1" color="error">
        Sorry, autocomplete is not gonna work. ERROR: BillingNotEnabledMapError. You must enable
        Billing on the Google Cloud Project
      </Typography>
      <Grid container justifyContent="center" sx={{ mb: 3 }}>
        <Grid item>
          <AutocompleteBoxWithNoSSR />
        </Grid>
      </Grid>
      <MapWithNoSSR />
    </div>
  );
};

export default StepSelectPlace;
