import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className='nav-links'>
          <div className='nav-links__link'>
            <Link to='/'>Home</Link>
          </div>

          <div className='nav-links__link'>
            <Link to='/login'>Login</Link>
          </div>

          <div className='nav-links__link'>
            <Link to='/signup'>Signup</Link>
          </div>

          <div className='nav-links__link'>
            <Link to='/dashboard'>Dashboard</Link>
          </div>

          <div className='nav-links__link'>
            <Link to='/logout'>Logout</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;