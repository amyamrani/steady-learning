import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import turtle_logo from '../images/turtle_logo.png';
import set_topic_page from '../images/set_topic_page.png';
import complete_button from '../images/complete_button.png';
import delete_topic_button from '../images/delete_topic_button.png';

class LandingPage extends Component {
  render() {
    return (
      <div className='page-container'>

        <section>
          <div className='landing-section-content'>
            <h1 className='section-title'>Steady Learning</h1>
            <div className='turtle-logo'>
              <img src={ turtle_logo } alt='turtle-logo' />
            </div>
          </div>
        </section>

        <section>
          <div className='landing-section-content'>
            <h2 className='section-title'>About Steady Learning</h2>
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
          </div>
        </section>

        <section>
          <div className='landing-section-content'>
            <h2 className='section-title'>Get Started</h2>
            <p>Select a topic from the list and specifiy how many days you would like to learn about the topic</p>
            <p>Then, login in each day to see your next reading</p>
            <div className='screenshots'>
              <img src={ set_topic_page } alt='add-new-topic' />
            </div>
          </div>
        </section>

        <section>
          <div className='landing-section-content'>
            <h2 className='section-title'>Monitor Your Progress</h2>
            <p>Once you complete the reading for a given day, simply mark it as completed</p>
            <div className='screenshots'>
              <img src={ complete_button } alt='complete-button' />
            </div>
          </div>
        </section>

        <section>
          <div className='landing-section-content'>
            <h2 className='section-title'>Manage Your Topic</h2>
            <p>Delete your current topic and start a new one anytime you choose</p>
            <div className='screenshots'>
              <img src={ delete_topic_button } alt='delete-topic-button' />
            </div>
          </div>
        </section>

        <section>
          <div className='landing-section-content'>
            <h2 className='section-title'>Start Steady Learning</h2>
            <p>
              Sign up
              <Link className='signup-login-links' to='/signup'>HERE</Link>
              or try the
              <Link className='signup-login-links' to='/login'>DEMO</Link>
              today!
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default LandingPage;
