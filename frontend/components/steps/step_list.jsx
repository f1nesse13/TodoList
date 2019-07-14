import React, { Component } from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { steps, todo_id, receiveStep } = this.props;
    const stepItems = steps.map((step, i) => (
      <StepListItemContainer key={i} todo_id={todo_id} step={step} />
    ));

    return (
      <div>
        <ul>
          {stepItems}
          <StepForm todo_id={todo_id} receiveStep={receiveStep} />
        </ul>
        {/* <div className="step-form"></div> */}
      </div>
    );
  }
}

export default StepList;
