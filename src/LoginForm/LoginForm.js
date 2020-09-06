import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import APIContext from '../APIContext';

class LoginForm extends Component {
  static contextType = APIContext;

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
  }

  handleLogin = (e) => {
    this.context.login({
      email: this.state.email,
    });
    e.preventDefault();
  }

  render() {
    if (this.context.user) {
      return <Redirect to="/dashboard" />
    }

    return (
      <form className='login-form' onSubmit={this.handleLogin}>
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

        <div>
          <button>Login</button>
        </div>

        <div>
          <Link to="/signup">Don't have an account?</Link>
        </div>
      </form>
    )
  }
}

export default LoginForm;