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
