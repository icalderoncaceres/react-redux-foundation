/* import react */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {authSuccess} from '../../actions/session/SessionActions';

/* class */
class Login extends React.Component {

  static propTypes = {
    login: PropTypes.func.isRequired
  }

  /* constructore */
  constructor() {
    /* super */
    super();
  }

  /* render */
  render() {
    /* return */
    return (<div className="login_content column is-6 is-offset-3">

      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email"/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password"/>
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success is-12 column" onClick={this.props.login}>
            Login
          </button>
        </p>
      </div>
    </div>);
  }
}

/* maps to pospr */
const mapStop = (state, ownProps) => {
  return {login: authSuccess};
}


/* return */
export default connect(null, mapStop())(Login);
