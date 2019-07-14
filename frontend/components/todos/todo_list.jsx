import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;

    const todoList = todos.map((todo, i) => (
      <TodoListItem key={i} todo={todo} removeTodo={removeTodo} receiveTodo={receiveTodo} />
    ));
    return (
      <div>
        <TodoForm todos={todos} receiveTodo={receiveTodo} />
        <ul className="todo-list">{todoList}</ul>
      </div>
    );
  }
}

export default TodoList;
