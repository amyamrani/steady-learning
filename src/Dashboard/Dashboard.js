import React, { Component } from 'react';
import './Dashboard.css';
import UserArticle from '../UserArticle/UserArticle';
import APIContext from '../APIContext';
import { Link, Redirect } from 'react-router-dom';

class Dashboard extends Component {
  static contextType = APIContext;

  articlesForCategory = () => {
    return this.context.userArticles.filter(userArticle => userArticle.article.topic === this.context.topic);
  }

  render() {
    if (!this.context.user) {
      return <Redirect to='/' />
    }

    return (
      <div className='dashboard'>
        <header>
          <h1>Dashboard</h1>
          <h2>
            Current Topic:
            {' '}
            {this.context.topic}
          </h2>

          <div>
            <Link to='/set_topic'>Change Topic</Link>

            <button onClick={this.context.deleteTopic}>Delete Topic</button>
          </div>
        </header>

        {this.articlesForCategory().map(userArticle => (
          <UserArticle
            key={userArticle.id}
            title={userArticle.article.title}
            url={userArticle.article.url}
            date={userArticle.start_date}
            completed={userArticle.completed_date !== ''}
          />
        ))}
      </div>
    )
  }
}

export default Dashboard;