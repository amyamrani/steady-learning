import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import Dashboard from '../Dashboard/Dashboard';
import APIContext from '../APIContext';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userArticles: [],
    }
  }

  componentDidMount() {
    this.setState({
      userArticles: [
        {
          article: {
            title: "How to make perfect boiled eggs",
            url: "https://www.w3schools.com",
            topic: "Cooking Basics",
          },
          start_date: "Day 3",
          completed_date: "",
        },
        {
          article: {
            title: "How to bake a cake",
            url: "https://www.w3schools.com",
            topic: "Cooking Basics",
          },
          start_date: "Day 2",
          completed_date: "",
        },
        {
          article: {
            title: "How to grill a steak",
            url: "https://www.w3schools.com",
            topic: "Cooking Basics",
          },
          start_date: "Day 1",
          completed_date: "Today",
        },
      ]
     });
  }

  render() {
    const contextValue = {
      userArticles: this.state.userArticles,
    }

    return (
      <APIContext.Provider value={contextValue}>
        <div className='app'>
          <Nav />

          <main>
            <Switch>
              <Route
                exact path='/'
                component={LandingPage}
              />

              <Route
                exact path='/login'
                component={LoginPage}
              />

              <Route
                exact path='/signup'
                component={SignupPage}
              />

              <Route
                exact path='/dashboard'
                component={Dashboard}
              />
            </Switch>
          </main>

          <Footer />
        </div>
      </APIContext.Provider>
    )
  }
}

export default App;
