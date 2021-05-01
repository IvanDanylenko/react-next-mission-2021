import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import StepLayout from '../../components/step/StepLayout';
import StepSelectTime from '../../components/step/StepSelectTime';
import StepSelectPlace from '../../components/step/StepSelectPlace';
import StepShowSummary from '../../components/step/StepShowSummary';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const StepPage = () => {
  const router = useRouter();
  const { activeStep } = useTypedSelector((state) => state.step);
  const queryActiveStep = router.query.activeStep;
  const parsedStep = parseInt(queryActiveStep, 10);
  useEffect(() => {
    // change route to activeStep
    if (Number.isNaN(parsedStep) || activeStep != parsedStep - 1) {
      router.push(`/step/${activeStep + 1}`, undefined, { shallow: true });
    }
  }, [activeStep]);

  return (
    <StepLayout>
      {activeStep === 0 && <StepSelectTime />}
      {activeStep === 1 && <StepSelectPlace />}
      {activeStep === 2 && <StepShowSummary />}
    </StepLayout>
  );
};

export default StepPage;
