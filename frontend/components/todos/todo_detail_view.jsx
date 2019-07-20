import React from 'react';
import StepListContainer from '../steps/step_list_container';
class TodoDetailView extends React.Component {
  componentDidMount() {
    this.props.fetchSteps();
  }

  render() {
    const { todo, removeTodo, fetchSteps } = this.props;
    return (
      <div className="steps">
        <p>
          <span className="notes-title">Notes:</span> {todo.body}
        </p>
        <div className="step-container">
          <StepListContainer todo_id={todo.id} />
        </div>
        <ul className="tag-list">
          <h4>Tags</h4>
          {todo.tags.map(tag => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoDetailView;
