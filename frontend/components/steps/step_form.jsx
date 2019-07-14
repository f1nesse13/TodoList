import React, { Component } from 'react';
import uniqueId from '../../util/unique_id';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', todo_id: this.props.todo_id, done: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveStep(step);
    this.setState({ title: '' });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <form className="step-form" onSubmit={this.handleSubmit.bind(this)}>
        <label>
          New Step
          <input
            type="text"
            name="title"
            onChange={this.update('title')}
            value={this.state.title}
          />
        </label>
        <button type="submit">Create Step</button>
      </form>
    );
  }
}

export default StepForm;
