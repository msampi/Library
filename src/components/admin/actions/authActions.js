import axios from 'axios';
import { LOGIN_URL } from '../../config';

export function authLoading(bool) {
  return {
      type: 'AUTH_IS_LOADING',
      isLoading: bool
  };
}
export function authError() {
  return {
      type: 'AUTHENTICATION_ERROR',
      payload: 'Las credenciales no son válidas'
  };
}

export function signInAction({ email, password }, history) {
  return (dispatch) => {
    
    dispatch(authLoading(true));
    axios.post(LOGIN_URL, { email, password })
        .then((response) => {
            if (response.status !== 200) {
                dispatch(authError());
            }
            else{
              dispatch(authLoading(false));
              dispatch({ type: 'AUTHENTICATED' });
              sessionStorage.setItem("user", response.data.token);
              history.push('/admin');
            }
        })
        .catch(() => { dispatch(authError()); dispatch(authLoading(false)) });

};
  
}

