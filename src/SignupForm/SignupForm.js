import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  }

  render() {
    return (
      <form className='signup-form'>
        <div>
          <label htmlFor='first-name'>First name</label>
          <input
            placeholder='First Name'
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
            placeholder='Last Name'
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

        <button type='submit'>Sign Up</button>

        <div>
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    )
  }
}

export default SignupForm;