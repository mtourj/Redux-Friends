import React, { useState } from 'react';

import { connect } from 'react-redux';

import { login } from '../actions';

import { loading } from '../img/loading.gif';

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  error: state.error,
  token: state.token
});

export const Login = connect(mapStateToProps, { login })(props => {
  const [creds, setCreds] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    const newCreds = {
      ...creds,
      [e.target.name]: e.target.value
    }
    
    setCreds(newCreds);
  }

  const submit = e => {
    e.preventDefault();

    props.login(creds);
  }

  if(props.token) {
    props.history.push('/friends');
  }

  return (

    <div className='login-page'>
      <form onSubmit={submit} className='login-form'>
        <h2>Log in</h2>
        <div className='form-field'>
          <label>Username</label>
          <input value={creds.username} onChange={handleChange} type='username' name='username' />
        </div>
        <div className='form-field'>
          <label>Password</label>
          <input value={creds.password} onChange={handleChange} type='password' name='password' />
        </div>
        <button action='submit'>Log In</button>
        {
          props.error ?
          <p className='error-text'>{props.error.error}</p> : ''
        }
        {
          props.loggingIn ?
          <img src={loading} alt='' /> : ''
        }
      </form>
    </div>
  )
});

export const FriendsList = props => {
  return (
    <div className='friends-list'>Friends list!</div>
  );
}

export const withAuth = props => component => {
  
}