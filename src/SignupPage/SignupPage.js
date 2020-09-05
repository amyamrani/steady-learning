import React, { Component } from 'react';
import SignupForm from '../SignupForm/SignupForm';

class SignupPage extends Component {
  render() {
    return (
      <>
        <section>
          <header>
            <h3>Signup</h3>
          </header>

          <SignupForm />
        </section>
      </>
    )
  }
}

export default SignupPage;
