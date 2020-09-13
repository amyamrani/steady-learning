import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import Dashboard from '../Dashboard/Dashboard';
import APIContext from '../APIContext';
import config from '../config';
import './App.css';
import SetTopicPage from '../SetTopicPage/SetTopicPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentPlan: {},
      userArticles: [],
      isLoggedIn: undefined,
    }
  }
  getRecentPlan = () => {
    const authToken = localStorage.getItem('authToken');

    fetch(`${config.API_BASE_URL}/api/plans/recent_plan`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then((res) => {
        this.setRecentPlan(res)
        this.getUserArticles()
      })
      .catch(error => this.setState({ error }))
  };

  getUserArticles = () => {
    const authToken = localStorage.getItem('authToken');
    if (this.state.recentPlan.id) {
      fetch(`${config.API_BASE_URL}/api/user_articles?plan_id=${this.state.recentPlan.id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .then((res) => {
          this.setUserArticles(res)
        })
        .catch(error => this.setState({ error }))
    }
  };

  componentDidMount() {
    const authToken = localStorage.getItem('authToken');
    this.setState({ isLoggedIn: authToken ? true : false });
  }

  setRecentPlan = (recentPlan) => {
    this.setState({ recentPlan: recentPlan });
  }

  setUserArticles = (userArticles) => {
    this.setState({ userArticles: userArticles });
  }

  login = (user) => {
    localStorage.setItem('authToken', user.token);
    localStorage.setItem('user', user);
    this.setState({ isLoggedIn: true, user: user });
  }

  signup = (user) => {
    localStorage.setItem('authToken', user.token);
    localStorage.setItem('user', user);
    this.setState({ isLoggedIn: true, user: user });
  }

  logout = () => {
    localStorage.removeItem('authToken');
    this.setState({ isLoggedIn: false, user: undefined });
  }

  render() {
    const contextValue = {
      recentPlan: this.state.recentPlan,
      userArticles: this.state.userArticles,
      login: this.login,
      logout: this.logout,
      signup: this.signup,
      getRecentPlan: this.getRecentPlan,
      setRecentPlan: this.setRecentPlan,
      setUserArticles: this.setUserArticles,
      user: this.state.user,
      isLoggedIn: this.state.isLoggedIn,
    }

    return (
      <APIContext.Provider value={contextValue}>
        <div className='app'>
          <Nav loggedIn={false} />

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

              <Route
                exact path='/set_topic'
                component={SetTopicPage}
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
