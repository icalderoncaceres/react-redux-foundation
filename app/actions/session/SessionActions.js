/* import Users */
import { push } from 'react-router-redux'

/* do authetications */
const authS = () => ({
  type: 'AUTH_SUCCESS'
})

const authF = () => ({
  type: 'AUTH_FAIL'
})

/* auth success */
export const authSuccess = () =>{
  return (dispatch)=>{
    dispatch(authS());
    dispatch(push('/'));
  }
}

/* auth fail */
export var authFail = () => {
  return (dispatch)=>{
    dispatch(authF());
    dispatch(push('/login'));
  }
}
