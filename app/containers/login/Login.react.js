import React from 'react';
import { connect } from 'react-redux';
import { authSuccess } from '../../actions/session/SessionActions';

class LoginContainer extends React.Component {
  render() {
    return <button onClick={this.props.login}>Login Here!</button>
  }
}
export default connect(null, {login: authSuccess})(LoginContainer);
