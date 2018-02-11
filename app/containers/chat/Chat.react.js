/* import react */
import React from 'react';
import {connect} from 'react-redux';
/* import other components */
import ChatLeftPane from '../../components/chat/ChatLeftPane.react';
import ChatContainer from '../../components/chat/ChatContainer.react';

/* Class */
class Chat extends React.Component {
  /* Contructor react */
  constructor() {
    super();
  }

  /* render */
  render() {
    return (

      <section className="columns is-gapless all-app-content" >
        <ChatLeftPane/>
        <ChatContainer/>
      </section>
    )
  }
}

/* export default */
export default connect()(Chat);
