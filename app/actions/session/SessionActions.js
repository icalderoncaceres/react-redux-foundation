/* import Users */
import { push } from 'react-router-redux'
import {AUTH_FAIL, AUTH_SUCCESS} from '../../constants/ActionTypes';

/* do authetications */
const authS = (obj) => ({
  type: AUTH_SUCCESS,
  exist: obj.exist,
  name: obj.name,
  email: obj.email
})

const authF = (obj) => ({
  type: AUTH_FAIL,
  exist: obj.exist,
  email: obj.email,
  code: obj.code
})

/* auth success */
export const doLogin = (user,password) =>{
  return (dispatch)=>{
    /* BACK API*/
    var response = {
      exist: true,
      name: 'invitado',
      email: user
    }
    if(response.exist){
      dispatch(authS(response));
      dispatch(push('/'));
    }else{
      dispatch(authF({...response, code: 999}));
    }
  }
}
