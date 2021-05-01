import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Box from '@material-ui/core/Box';

interface StepWrapperProps {
  activeStep: number;
  steps: string[];
}

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, steps, children }) => {
  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ p: 2 }}>{children}</Box>
    </>
  );
};

export default StepWrapper;
