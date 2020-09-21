import React, { Component } from 'react';
import SignupForm from '../SignupForm/SignupForm';

class SignupPage extends Component {
  render() {
    return (
      <section className='page-container'>
        <h1 className='section-title'>Sign Up</h1>

        <SignupForm />
      </section>
    )
  }
}

export default SignupPage;
