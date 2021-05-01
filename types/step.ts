export enum StepActionTypes {
  SET_ACTIVE_STEP = 'SET_ACTIVE_STEP',
}

export interface StepState {
  activeStep: number;
}

interface SetActiveStep {
  type: StepActionTypes.SET_ACTIVE_STEP;
  payload: number;
}

export type StepAction = SetActiveStep;
