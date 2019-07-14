import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTodo } from '../../reducers/selectors';
import { receiveStep } from '../../actions/steps_actions';

const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsByTodo(state, todo_id),
  todo_id
});

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
