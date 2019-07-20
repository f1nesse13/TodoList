import React, { Component } from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { details: false, klass: false };
  }

  delete(todo, e) {
    e.preventDefault();
    this.props.deleteTodo(todo);
  }

  updateTodo(e) {
    e.preventDefault();
    const toggleTodo = Object.assign({}, this.props.todo, { done: !this.props.todo.done });
    this.props.updateTodo(toggleTodo);
  }

  showDetails(e) {
    this.setState({ details: !this.state.details, klass: !this.state.klass });
  }

  render() {
    let details;
    if (this.state.details) {
      details = <TodoDetailViewContainer todo={this.props.todo} />;
    }
    return (
      <li key={this.props.todo.id} className={this.state.klass ? 'expand' : ''}>
        <button className="expand-todo" onClick={this.showDetails.bind(this)}>
          {this.state.klass ? 'Minimize Todo' : 'Expand Todo'}
        </button>
        <h3>{this.props.todo.title}</h3>
        {details}
        <button onClick={this.updateTodo.bind(this)}>
          {this.props.todo.done === true ? 'Not Finished Todo' : 'Finished Todo'}
        </button>
        <button onClick={this.delete.bind(this, this.props.todo)}>Delete Todo</button>
      </li>
    );
  }
}

export default TodoListItem;
