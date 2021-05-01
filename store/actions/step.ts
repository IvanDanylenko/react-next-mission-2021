import { StepAction, StepActionTypes } from '../../types/step';

export const setActiveStep = (payload: number): StepAction => {
  return { type: StepActionTypes.SET_ACTIVE_STEP, payload };
};
