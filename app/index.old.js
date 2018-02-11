/* import react */
import React from 'react';
import '../system/system';
import {render} from 'react-dom';
import {configureStore} from './store/configureStore';
import {Provider, connect} from 'react-redux';
import {loadChats} from './actions/chat/ChatActions';
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch} from 'react-router';

/* const */
import createHistory from 'history/createBrowserHistory';
var history = createHistory();

/* router dist */
import App from './containers/App.react';

/* const store */
const store = configureStore(history);
/* store call first comm */
store.dispatch(loadChats());

/* connected switch */
const ConnectedSwitch = connect(state => ({location: state.router.location}))(Switch);

/* render */
render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <Switch>
      <App/>
    </Switch>
  </ConnectedRouter>
</Provider>, document.getElementById('main-app'));
