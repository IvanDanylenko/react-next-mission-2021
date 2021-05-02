import { StepActionTypes, StepAction, StepState } from '../../types/step';

const initialState: StepState = {
  activeStep: 0,
  steps: ['Select time', 'Select place', 'Summary'],
};

export const stepReducer = (state = initialState, action: StepAction): StepState => {
  switch (action.type) {
    case StepActionTypes.SET_ACTIVE_STEP:
      return { ...state, activeStep: action.payload };
    default:
      return state;
  }
};
