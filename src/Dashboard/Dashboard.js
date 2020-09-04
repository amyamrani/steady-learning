import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Dashboard.css';

class Dashboard extends Component {

  render() {
    return (
      <div className='dashboard'>
        <Nav />
        <main>
          <header>
              <h1>Dashboard</h1>
              <h2>Current Topic: Cooking Basics</h2>
            </header>
            
          <section>
            <header>
              <h3>Day 1</h3>
              <a href='https://www.w3schools.com'>How to grill a steak</a>
            </header>
            
            <form>
              <div>
                <input type='checkbox' id='completed' name='completed' value='completed' />
                <label htmlFor='completed'>Completed</label>
              </div>
              <div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </section>
          
          <section>
            <header>
              <h3>Day 2</h3>
              <a href='https://www.w3schools.com'>How to grill a steak</a>
            </header>
            <form>
              <div>
                <input type='checkbox' id='completed' name='completed' value='completed' />
                <label htmlFor='completed'>Completed</label>
              </div>
              <div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </section>

          <section>
            <header>
              <h3>Day 3</h3>
              <a href='https://www.w3schools.com'>How to make perfect boiled eggs</a>
            </header>
            <form>
              <div>
                <input type='checkbox' id='completed' name='completed' value='completed' />
                <label htmlFor='completed'>Completed</label>
              </div>
              <div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </section>

        </main>
        <Footer />
      </div>
    )
  }
}

export default Dashboard;