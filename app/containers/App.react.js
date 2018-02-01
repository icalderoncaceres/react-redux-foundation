/* import app */
import React from 'react';
import ChatList from '../components/chat/ChatList.react';
import Chat from './Chat.react';


class App extends React.Component {
  /* Super contruct */
  constructor() {
    super();
  }

  /* render */
  render() {
    return (<div id="_chat-main">
      <Chat/>
    </div>);
  }
}

/* render app export */
export default App;
