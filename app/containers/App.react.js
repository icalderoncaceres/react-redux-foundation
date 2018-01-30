/* import app */
import React from 'react';
import ChatList from '../components/chat/ChatList.react';

class App extends React.Component {
  /* Super contruct */
  constructor() {
    super();
  }

  /* render */
  render() {
    return (<div id="_chat-main" className="is-varable is-2">
      <ChatList/>
    </div>);
  }
}

/* render app export */
export default App;
