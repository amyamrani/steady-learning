import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
  }

  render() {
    return (
      <form className='login-form'>
        <div>
          <label htmlFor='username'>Email</label>
          <input
            type='text'
            name='username'
            id='username'
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>

        <button type='submit'>Login</button>

        <div>
          <Link to="/signup">Don't have an account?</Link>
        </div>
      </form>
    )
  }
}

export default LoginForm;