import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import Dashboard from '../Dashboard/Dashboard';
import APIContext from '../APIContext';
import './App.css';
import SetTopicPage from '../SetTopicPage/SetTopicPage';
import STORE from '../store';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userArticles: STORE.userArticles,
    }
  }

  componentDidMount() {
  }

  deleteTopic = () => {
    this.setState({ topic: undefined });
  }

  setTopic = (topic) => {
    this.setState({ topic: topic });
  }

  login = (user) => {
    this.setState({ user: user });
  }

  logout = () => {
    this.setState({ user: undefined });
  }

  render() {
    const contextValue = {
      userArticles: this.state.userArticles,
      deleteTopic: this.deleteTopic,
      login: this.login,
      logout: this.logout,
      user: this.state.user,
      topic: this.state.topic,
      setTopic: this.setTopic,
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
