import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return Object.assign({}, state, newTodo);
    case RECEIVE_TODOS:
      let nextState = {};
      action.todos.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case REMOVE_TODO:
      let newState = Object.assign({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};
export default todosReducer;
