import React from 'react';
import {Route, Switch} from 'react-router';

/* rutes */
import PrivateRoute from './session/PrivateRoute.react';
import Login from './login/Login.react';
import Home from './home/Home.react';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div id="_chat-main">

      <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute exact={true} path="/" component={Home}/>
          <PrivateRoute exact={true} path="/react" component={Home}/>
          <PrivateRoute exact={true} path="/redux" component={Home}/>
          <PrivateRoute exact={true} path="/foundation" component={Home}/>
      </Switch>
    </div>)
  }
}

/* default export */
export default App;
