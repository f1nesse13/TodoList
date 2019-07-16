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
