import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Steady Learning</h1>
          <p>[<em>placeholder for screenshot of tortoise logo</em>]</p>
        </header>

        <section>
          <header>
            <h2>About Steady Learning</h2>
          </header>
          <p>Steady Learning helps you learn a range of topics by providing you with small units of information on a daily basis for a short-term period</p>
          <div className='reasons-list'>
            <ul>
              <div className='reasons-list__title'>Reasons to use Steady Learning:</div>
              <li>Immediate Learning</li>
              <li>Retention</li>
              <li>Continually learn throughout your day or week </li>
              <li>Build good habits</li>
            </ul>
          </div>
        </section>

        <section>
          <header>
            <h3>Get Started</h3>
          </header>
          <p>Select a topic from the list and specifiy how many days you would like to learn about the topic</p>
          <p>Login in each day to see your next reading</p>
          <p>[<em>placeholder for screenshot of Set Topic page</em>]</p>
        </section>

        <section>
          <header>
            <h3>Monitor Your Progress</h3>
          </header>
          <p>[<em>placeholder for screenshot of completed button</em>]</p>
          <p>Once you complete the reading for a given day, simply mark it as completed</p>
        </section>

        <section>
          <header>
            <h3>Manage Your Topic</h3>
          </header>
          <p>Delete you current topic and start a new one anytime you choose</p>
          <p>[<em>placeholder for screenshot of Dashboard page</em>]</p>
        </section>

        <section>
          <header>
            <h3>Start Steady Learning Today!</h3>
          </header>
          <p>
            Sign up
            <Link style={{margin: '0 3px'}} to='/signup'>HERE</Link>
            or try the
            <Link style={{margin: '0 3px'}} to='/login'>DEMO</Link>
            first.
          </p>
        </section>
      </>
    )
  }
}

export default LandingPage;
