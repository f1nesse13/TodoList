import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos;
  }

  render() {
    const {
      todos,
      errors,
      clearErrors,
      receiveTodo,
      removeTodo,
      createTodo,
      updateTodo
    } = this.props;

    const todoList = todos.map((todo, i) => (
      <TodoListItem
        key={i}
        todo={todo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        receiveTodo={receiveTodo}
      />
    ));
    return (
      <div>
        <TodoForm
          errors={errors}
          clearErrors={clearErrors}
          todos={todos}
          receiveTodo={receiveTodo}
          createTodo={createTodo}
        />
        <ul className="todo-list">{todoList}</ul>
      </div>
    );
  }
}

export default TodoList;
