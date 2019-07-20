export const fetchTodos = () =>
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  });

export const createTodo = data =>
  $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: { todo: data },
    dataType: 'json'
  });

export const updateTodo = data =>
  $.ajax({
    method: 'PATCH',
    url: `/api/todos/${data.id}`,
    data: { todo: data }
  });

export const deleteTodo = data =>
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${data.id}`
  });

export const fetchSteps = todo_id =>
  $.ajax({
    method: 'GET',
    url: `/api/todos/${todo_id}/steps`
  });

export const createStep = (todo_id, data) =>
  $.ajax({
    method: 'POST',
    url: `/api/todos/${todo_id}/steps`,
    data: { steps: data }
  });

export const updateStep = data =>
  $.ajax({
    method: 'PATCH',
    url: `/api/steps/${data.id}`,
    data: { steps: data }
  });

export const deleteStep = data =>
  $.ajax({
    method: 'DELETE',
    url: `/api/steps/${data.id}`
  });
