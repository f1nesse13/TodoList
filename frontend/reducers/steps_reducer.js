import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/steps_actions';
const initialState = {};
const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STEP:
      const newStep = { [action.step.id]: action.step };
      return Object.assign({}, state, newStep);
    case RECEIVE_STEPS:
      let nextState = {};
      action.steps.forEach(step => {
        nextState[step.id] = step;
      });
      return nextState;
    case REMOVE_STEP:
      let newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
