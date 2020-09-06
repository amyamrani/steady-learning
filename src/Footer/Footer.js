import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        &copy; Steady Learning {(new Date().getFullYear())}
      </footer>
    )
  }
}

export default Footer;