import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadPeople } from './ducks/people';
import { loadCompanies } from './ducks/companies';

const initialState = { };
const store = configureStore(initialState);

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

const { dispatch } = store;

//dispatch(loadPeople());
dispatch(loadCompanies()).then(() =>  dispatch(loadPeople()));

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
