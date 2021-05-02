import React, { FormEventHandler } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Box from '@material-ui/core/Box';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import Layout from '../Layout';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const StepContainer: React.FC = ({ children }) => {
  const { activeStep, steps } = useTypedSelector((state) => state.step);

  const { setActiveStep } = useActions();

  const prev = () => setActiveStep(activeStep - 1);

  const next = () => setActiveStep(activeStep + 1);

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert('Your reservation submitted');
  };

  return (
    <Layout>
      <Paper elevation={0} sx={{ p: 2 }}>
        {/* FORM, ??? formik */}
        <form onSubmit={submit}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Reservation process
          </Typography>

          {/* Steps */}
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => (
              <Step key={index} completed={activeStep > index} onClick={() => setActiveStep(index)}>
                <StepLabel style={{ cursor: 'pointer' }}>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ p: 2 }}>{children}</Box>
          {/* End Steps */}

          {/* Buttons: Prev, Next, Submit */}
          <Grid container justifyContent="flex-end">
            {activeStep !== 0 && (
              <Button onClick={prev} startIcon={<KeyboardArrowLeft />} sx={{ mr: 2 }}>
                Prev
              </Button>
            )}
            {activeStep < steps.length - 1 && (
              <Button onClick={next} variant="contained" endIcon={<KeyboardArrowRight />}>
                Next
              </Button>
            )}
            {activeStep === steps.length - 1 && (
              <Button type="submit" variant="contained">
                Submit
              </Button>
            )}
          </Grid>
          {/* End Buttons */}
        </form>
      </Paper>
    </Layout>
  );
};

export default StepContainer;
