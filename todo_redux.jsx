import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import rootReducer from './frontend/reducers/rootReducer';
import Root from './frontend/components/root';

document.addEventListener('DOMContentLoaded', () => {
  const prevStorage = localStorage.state ? JSON.parse(localStorage.state) : {};
  const store = configureStore(prevStorage);

  const content = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, content);
});
