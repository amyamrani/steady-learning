import React, { Component } from 'react';
import './LandingPage.css';
import SignupForm from '../SignupForm/SignupForm';

class LandingPage extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Steady Learning</h1>
        </header>

        <section>
          <header>
            <h2>Dive into steady learning</h2>
          </header>

          <p>[<em>placeholder for screenshot of tortoise logo</em>]</p>
          <p>Steady Learning helps you learn a range of topics by providing you with small units of information on a daily basis for a short-term period</p>
        </section>

        <section>
          <header>
            <h3>A little learning each day can go a long way</h3>
          </header>

          <p>[<em>placeholder for screenshot of ****</em>]</p>

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
            <h3>Monitor your progress</h3>      
          </header>

          <p>[<em>placeholder for screenshot of checklist</em>]</p>
          <p>Use the checklist to stay on track with your learning schedule</p>
        </section>

        <section>
          <header>
            <h3>What are you waiting for?<br />Start Steady Learning Today!</h3>
          </header>

          <SignupForm />
        </section>
      </>
    )
  }
}

export default LandingPage;
