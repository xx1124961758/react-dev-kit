import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/index';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './containers/index.jsx';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'));
