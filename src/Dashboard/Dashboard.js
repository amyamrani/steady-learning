import React, { Component } from 'react';
import './Dashboard.css';
import UserArticle from '../UserArticle/UserArticle';
import APIContext from '../APIContext';

class Dashboard extends Component {
  static contextType = APIContext;

  render() {
    return (
      <div className='dashboard'>
        <header>
          <h1>Dashboard</h1>
          <h2>
            Current Topic:
            {this.props.article?.topic}
          </h2>
        </header>

        {this.context.userArticles.map(userArticle => (
          <UserArticle
            title={userArticle.article.title}
            url={userArticle.article.url}
            date={userArticle.start_date}
            completed={userArticle.completed_date != ''}
          />
        ))}
      </div>
    )
  }
}

export default Dashboard;