/* dependencies */
import React from 'react';
import '../system/system';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadChats } from './actions/ChatActions';
import App from './containers/App.react';

/* const store */
const store = configureStore();

/* store call first comm */
store.dispatch(loadChats());

/* render */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main-app')
);
