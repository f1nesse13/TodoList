import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTodo } from '../../reducers/selectors';
import { receiveStep, createStep } from '../../actions/steps_actions';

const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsByTodo(state, todo_id),
  todo_id
});

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  createStep: (todo_id, step) => dispatch(createStep(todo_id, step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
