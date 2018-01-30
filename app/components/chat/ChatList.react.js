/* import react */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as ChatActions from '../../actions/ChatActions';

/* class render */
class ChatList extends React.Component {
  /* constructor */
  constructor() {
    super();

    /* binding */
    this._nodeMsM = this._nodeMsM.bind(this);
  }

  /* nodelist Chats */
  _nodeMsM() {
    /* iterate */
    var _node = this.props.chats.map((item, i) => {
      return (<div key={i}>{item.name}</div>)
    }, this);

    return _node;
  }

  /* render */
  render() {
    return (<div className="column is-4">
        {this._nodeMsM()}


    </div>)
  }
}

/* declare proptypes */
ChatList.propTypes = {
  chats: PropTypes.array.isRequired
};

//
const mapStateToProps = (state, ownProps) => {
  return {chats: state.chats}
}

//Export default class
export default connect(mapStateToProps)(ChatList);
