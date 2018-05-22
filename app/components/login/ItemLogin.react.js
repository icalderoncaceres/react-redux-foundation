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
          email: '',
          password:''
      }
  }

  _handleChange(e){
      this.setState({email: e.target.value});
    }

  _handleChangePassw(e){
      this.setState({password: e.target.value});
    }

  _login(){
      this.props.doLogin(this.state.email,this.state.password);
  }


  /* render */
  render() {

    let _alert;
    if(this.props.code == 999){
       _alert = (<div className="asd">No se logueo {this.props.email}</div>)
    }




    /* return */
    return (<div className="row">
    <div className="columns small-12 large-6 large-offset-3">
      <div className="card align-center">
        <div className="card-divider">
          <h2>Modulo administrativo <small>Nivel de Seguridad</small></h2>
        </div>
        <div className="card-section">
          <input className="" type="email" placeholder="Email" value={this.state.email} onChange={this._handleChange.bind(this)}  autoComplete="off" />
          <span className="">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="">
            <i className="fas fa-check"></i>
          </span>
          <input className="" type="password" placeholder="Password" value={this.state.password} onChange={this._handleChangePassw.bind(this)} autoComplete="off" />
          <span className="">
            <i className="fas fa-lock"></i>
          </span>
          <button className="button float-right" onClick={this._login.bind(this)}>
            Login
          </button>        
        </div>
    </div>
    {_alert}
  </div></div>);
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
