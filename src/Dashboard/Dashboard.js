import React, { Component } from 'react';
import './Dashboard.css';
import UserArticle from '../UserArticle/UserArticle';
import APIContext from '../APIContext';
import { Link, Redirect } from 'react-router-dom';
import config from '../config';

class Dashboard extends Component {
  static contextType = APIContext;

  componentDidMount () {
    this.context.getRecentPlan();
  }

  handleArchive = (e) => {
    e.preventDefault();

    const authToken = localStorage.getItem('authToken');

    fetch(`${config.API_BASE_URL}/api/plans/${this.context.recentPlan.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({status: 'archived'})
    })
      .then(res => {
        this.context.setRecentPlan({})
        this.context.setUserArticles([])
      })
      .catch(err => {
        this.setState({errorMessage: 'Failed to delete.'})
      });
  }

  render() {
    if (this.context.isLoggedIn === false) {
      return <Redirect to='/' />
    }

    return (
      <div className='page-container'>
        <h1 className='section-title'>Dashboard</h1>

        <div>
          Current Topic:
        </div>

        <h2>
          {this.context.recentPlan.topic}
        </h2>

        <div className='completed-message'>
          {this.context.recentPlan.status === 'completed' && (
            'Congrats on completing the topic!'
          )}
        </div>

        {!this.context.recentPlan.id && (
          <div>
            <Link to='/set_topic'>Add New Topic</Link>
          </div>
        )}

        {this.context.recentPlan.status === 'completed' && (
          <div>
            <Link to='/set_topic'>Add New Topic</Link>
          </div>
        )}

        {this.context.recentPlan.status === 'active' && (
          <div>
            <button onClick={this.handleArchive}>Delete Topic</button>
          </div>
        )}

        {this.context.userArticles.map(userArticle => (
          <UserArticle
            key={userArticle.id}
            id={userArticle.id}
            plan_id={userArticle.plan_id}
            title={userArticle.article.title}
            url={userArticle.article.url}
            date={userArticle.start_date}
            completed={userArticle.status === 'completed'}
          />
        ))}
      </div>
    )
  }
}

export default Dashboard;