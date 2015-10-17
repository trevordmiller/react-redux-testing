import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainReducer from './state/mainReducer';
import App from './components/App';

let store = createStore(mainReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
