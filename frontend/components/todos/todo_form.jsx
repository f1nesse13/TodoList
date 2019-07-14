import React, { Component } from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '', done: false };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Add New Todo
            <input
              type="text"
              className="todo-title"
              name="title"
              onChange={this.update('title')}
              value={this.state.title}
            />
          </label>
          <label>
            Notes
            <textarea
              className="todo-body"
              value={this.state.body}
              name="body"
              onChange={this.update('body')}
              col="20"
              row="5"
            />
          </label>
          <button type="submit">Create Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
