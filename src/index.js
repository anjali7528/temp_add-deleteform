import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

// middleware to connect store to add
const logger = ({dispatch, getState}) => (next) => (action) =>{
  if(typeof action !== 'function'){
    //console.log('ACTION_TYPE' , action.type);
  }
        next(action);
}

// creating store
const store = createStore(rootReducer, applyMiddleware(logger));
 console.log('store',store.getState());



ReactDOM.render(
  <React.StrictMode>
    <App  store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

