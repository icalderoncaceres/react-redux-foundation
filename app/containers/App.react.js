/* import app */
import React from 'react';
import ChatList from '../components/ChatList.react';

class App extends React.Component {
  /* Super contruct */
  constructor() {
    super();
  }

  /* render */
  render() {
    return (<div>
      Intento 10 de redux
      <div className="container">
        <ChatList />
      </div>
    </div>);
  }
}

/* render app export */
export default App;
