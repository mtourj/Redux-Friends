import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({
    type: LOGIN_START
  });
  return axios.post('http://localhost:5000/api/login', creds)
  .then (res => {
    localStorage.setItem('token', res.data.payload);

    dispatch ({
      type: LOGIN_SUCCESS
    })
  })
  .catch(err => { 
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.response.data
    })
  });
}