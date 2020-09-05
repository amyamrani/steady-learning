import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <>
        <section>
          <header>
            <h3>Login</h3>
          </header>

          <LoginForm />
        </section>
      </>
    )
  }
}

export default LoginPage;
