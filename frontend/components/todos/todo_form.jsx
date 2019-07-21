import React, { Component } from 'react';
import ErrorList from './error_list';
import uniqueId from '../../util/unique_id';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false,
      tag_names: [],
      errors: [],
      tag_name: ''
    };

    this.removeTag = this.removeTag.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  addTag(e) {
    e.preventDefault();
    this.setState({ tag_names: [...this.state.tag_names, this.state.tag_name], tag_name: '' });
  }

  removeTag(i, e) {
    this.setState({
      tag_names: this.state.tag_names.filter((tag, x) => x !== i)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo(todo).then(() => {
      this.setState({ title: '', body: '', tag_names: [], tag_name: '' });
    });
  }

  render() {
    const tags = this.state.tag_names.map((tag, i) => {
      let clickHandler = () => this.removeTag(i);
      return (
        <li key={i} onClick={clickHandler}>
          {tag}
        </li>
      );
    });
    return (
      <div className="form">
        <ErrorList errors={this.props.errors} />
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

          <label>
            Tags
            <ul>{tags}</ul>
            <input
              type="text"
              name="tag_name"
              value={this.state.tag_name}
              onChange={this.update('tag_name')}
            />
            <button type="button" onClick={this.addTag.bind(this)}>
              Submit Tag
            </button>
          </label>
          <button type="submit">Create Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
