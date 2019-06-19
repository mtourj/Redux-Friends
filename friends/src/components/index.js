import React from 'react';

export const Login = props => {
  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Log in</h2>
        <div className='form-field'>
          <label>Username</label>
          <input type='username' name='username' />
        </div>
        <div className='form-field'>
          <label>Password</label>
          <input type='password' name='password' />
        </div>
        <button>Log In</button>
      </div>
    </div>
  )
}