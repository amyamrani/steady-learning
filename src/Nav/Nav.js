import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import APIContext from "../APIContext";

class Nav extends Component {
  static contextType = APIContext;

  render() {
    return (
      <nav>
        <div className="nav-links">
          <div className="nav-links__link">
            <Link to="/">Steady Learning</Link>
          </div>
        </div>

        <div className="nav-actions">
          {this.context.user && (
            <div className="nav-links">
              <div className="nav-links__link">
                <Link to="/dashboard">Dashboard</Link>
              </div>

              <div className="nav-links__link">
                <button onClick={this.context.logout}>Logout</button>
              </div>
            </div>
          )}

          {!this.context.user && (
            <div className="nav-links">
              <div className="nav-links__link">
                <Link to="/login">Login</Link>
              </div>

              <div className="nav-links__link">
                <Link to="/signup">Signup</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default Nav;
