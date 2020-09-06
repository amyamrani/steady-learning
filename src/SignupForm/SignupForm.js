import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import APIContext from '../APIContext';

class SignupForm extends Component {
  static contextType = APIContext;

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  }

  handleSubmit = (e) => {
    this.context.login({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    });
    e.preventDefault();
  }

  render() {
    if (this.context.user) {
      return <Redirect to="/dashboard" />
    }

    return (
      <form className='signup-form' onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='first-name'>First name</label>
          <input
            type='text'
            name='first-name'
            id='first-name'
            value={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor='last-name'>Last name</label>
          <input
            type='text'
            name='last-name'
            id='last-name'
            value={this.state.lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
        </div>
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

        <button>Sign Up</button>

        <div>
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    )
  }
}

export default SignupForm;