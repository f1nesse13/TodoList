import { connect } from 'react-redux';
import TodoList from './todo_list';

import { allTodos } from '../../reducers/selectors';
import {
  receiveTodos,
  removeTodo,
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors,
  state
});

const mapDispatchToProps = dispatch => ({
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodo: () => dispatch(fetchTodos()),
  clearErrors: () => dispatch(clearErrors()),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
