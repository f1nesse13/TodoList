export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

export const stepsByTodo = ({ steps }, todoid) => {
  let matchingSteps = [];
  Object.keys(steps).map(id => {
    const step = steps[id];
    if (steps[id].todo_id === todoid) {
      matchingSteps.push(step);
    }
  });
  return matchingSteps;
};
