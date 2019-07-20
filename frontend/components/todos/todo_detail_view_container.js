import React from 'react';
import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { fetchSteps } from '../../actions/steps_actions';

const mapDispatchToProps = (dispatch, { todo }) => ({
  receiveSteps: steps => dispatch(receiveSteps(steps)),
  fetchSteps: () => dispatch(fetchSteps(todo.id)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
