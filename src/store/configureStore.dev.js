import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { serviceMiddleWare } from './middlewares';

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware( serviceMiddleWare, thunk, createLogger)),
);

export default configureStore;
