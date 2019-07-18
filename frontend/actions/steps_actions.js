export const RECEIVE_STEP = 'RECEIVE_STEP';
export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const REMOVE_STEP = 'REMOVE_STEP';

export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = step => ({
  type: REMOVE_STEP,
  step
});

export const fetchSteps = () => dispatch =>
  APIUtil.fetchSteps().then(res => {
    dispatch(receiveSteps(res));
  });

export const createStep = step => dispatch =>
  APIUtil.createStep(step).then(
    step => {
      dispatch(receiveStep(step));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const updateStep = step => dispatch =>
  APIUtil.updateStep(step).then(
    step => {
      dispatch(receiveStep(step));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteStep = step => dispatch =>
  APIUtil.deleteStep(step).then(
    step => {
      dispatch(removeStep(step));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
