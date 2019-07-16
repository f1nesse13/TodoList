// $(() => {
//   console.log('hello');
//   $('html').click(() => {
//     $.ajax({
//       method: 'DELETE',
//       url: '/api/todos/5'
//       // data: { todo: { title: 'test1', body: 'testing', done: false } }
//     }).then((res, err) => {
//       console.log(res);
//       console.log(err);
//     });
//     $.ajax({
//       method: 'GET',
//       url: '/api/todos'
//       // data: { todo: { title: 'test1', body: 'testing', done: false } }
//     }).then((res, err) => {
//       console.log(res);
//       console.log(err);
//     });
//     $.ajax({
//       method: 'POST',
//       url: '/api/todos',
//       data: { todo: { title: 'test1', body: 'testing', done: false } }
//     }).then((res, err) => {
//       console.log(res);
//       console.log(err);
//     });
//     $.ajax({
//       method: 'PATCH',
//       url: '/api/todos/4',
//       data: { todo: { body: 'updated!' } }
//     }).then((res, err) => {
//       console.log(res);
//       console.log(err);
//     });
//   });
// });
