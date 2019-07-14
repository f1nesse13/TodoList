import React from 'react';
import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';


const mapDispatchToProps => state ({
  receiveSteps: steps => dispatch(receiveSteps(steps)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView)