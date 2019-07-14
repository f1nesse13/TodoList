const initialState = {
  1: {
    // this is the step with id = 1
    id: 1,
    title: 'walk to store',
    done: false,
    todo_id: 1
  },
  2: {
    // this is the step with id = 2
    id: 2,
    title: 'buy soap',
    done: false,
    todo_id: 1
  },
  3: {
    id: 3,
    title: 'walk to the hair store',
    done: true,
    todo_id: 2
  },
  4: {
    id: 4,
    title: 'Buy Shampoo',
    done: false,
    todo_id: 2
  }
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_STEP':
      const newStep = { [action.step.id]: action.step };
      return Object.assign({}, state, newStep);
    case 'RECEIVE_STEPS':
      let nextState = {};
      action.steps.forEach(step => {
        nextState[step.id] = step;
      });
    case 'REMOVE_STEP':
      let newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
