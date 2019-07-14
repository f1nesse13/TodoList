import React, { Component } from 'react';

class StepListItem extends Component {
  constructor(props) {
    super(props);
  }

  toggleStep(e) {
    e.preventDefault();
    const toggledStep = Object.assign({}, this.props.step, { done: !this.props.step.done });
    this.props.receiveStep(toggledStep);
  }

  render() {
    const { removeStep, step } = this.props;
    return (
      <div className="step-list">
        <p>{step.title}</p>
        <p>{step.body}</p>

        <button onClick={this.toggleStep.bind(this)}>
          {step.done === true ? 'Undo Step' : 'Finished Step'}
        </button>

        <button onClick={removeStep}>Remove Step</button>
      </div>
    );
  }
}

export default StepListItem;
