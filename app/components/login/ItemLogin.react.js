/* import react */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {doLogin} from '../../actions/session/SessionActions';

/* class */
class Login extends React.Component {

  static propTypes = {
    doLogin: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    exist: PropTypes.bool.isRequired
  }

  /* constructore */
  constructor() {
    /* super */
    super();

    this.state = {
      email: ''
    }
  }

  _handleChange(e){
    this.setState({email: e.target.value});
  }

  _login(){
    this.props.doLogin(this.state.email);
  }


  /* render */
  render() {

    let _alert;
    if(this.props.code == 999){
       _alert = (<div className="asd">No se logueo {this.props.email}</div>)
    }

    /* return */
    return (<form>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell">
            <label>Input Label
              <input type="text" placeholder=".medium-6.cell" />
            </label>
          </div>
          <div className="medium-6 cell">
            <label>Input Label
              <input type="text" placeholder=".medium-6.cell" />
            </label>
          </div>
        </div>
      </div>
    </form>);
  }
}

/* maps to pospr */
const mapStop = (state, ownProps) => {
  return {doLogin: doLogin};
}
const mapStatetoProp = (state) => {
    var { name , email, isAuthenticated, code} = state.main.session;
    return {name: name, email: email, exist: isAuthenticated, code: code};
}

/* return */
export default connect(mapStatetoProp, mapStop())(Login);
