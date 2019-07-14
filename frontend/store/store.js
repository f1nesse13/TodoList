import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { checkAjax } from '../middleware/thunk';
const configureStore = (prevState = {}) => {
  const store = createStore(rootReducer, prevState, applyMiddleware(checkAjax));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};
export default configureStore;
