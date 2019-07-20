import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { receiveStep, removeStep, updateStep, deleteStep } from '../../actions/steps_actions';

const mapDispatchToProps = (dispatch, { step }) => ({
  receiveStep: step => dispatch(receiveStep(step)),
  removeStep: () => dispatch(removeStep(step)),
  deleteStep: () => dispatch(deleteStep(step)),
  updateStep: step => dispatch(updateStep(step))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
