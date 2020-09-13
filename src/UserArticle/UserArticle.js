import React, { Component } from 'react';
import './UserArticle.css';
import APIContext from '../APIContext';
import config from '../config';
import moment from 'moment';

class UserArticle extends Component {
  static contextType = APIContext;
  constructor(props) {
    super(props);

    this.state = {
      completed: props.completed,
    }
  };

  handlePlanComplete = () => {
    const authToken = localStorage.getItem('authToken')
    let params = {
      status: 'completed',
    }

    fetch(`${config.API_BASE_URL}/api/plans/${this.props.plan_id}`, {
      method: 'PATCH',
      headers: {
        "content-type": "application/json",
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(params)
    })
      .then((res) => {
        this.context.getRecentPlan()
      })
      .catch(err => {
      });
  }

  handleUpdate = (id) => {
    let params;

    if (!this.state.completed) {
      params = {
        completed_date: new Date(),
        status: 'completed',
      }
    } else {
      params = {
        status: 'active',
      }
    }

    const authToken = localStorage.getItem('authToken')

    fetch(`${config.API_BASE_URL}/api/user_articles/${this.props.id}`, {
      method: 'PATCH',
      headers: {
        "content-type": "application/json",
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(params)
    })
      .then((res) => {
        if (!this.state.completed) {
          this.handlePlanComplete()
          this.setState({ completed: true });
        } else {
          this.setState({ completed: false });
        }

      })
      .catch(err => {
        this.setState({errorMessage: "Topic and day count are required."})
      });

  };

  render() {
    return (
      <div className='user-article'>
        <section>
          <header>
            <h3>{moment(this.props.date).format('LL')}</h3>
            <a href={this.props.url}>{this.props.title}</a>
          </header>

          <form>
            <div>
              {this.state.completed && (
                <button
                  type="button"
                  onClick={e => this.handleUpdate(false)}
                >
                  Completed
                </button>
              )}

              {!this.state.completed && (
                <button
                type="button"
                  onClick={e => this.handleUpdate(true)}
                >
                  Mark as Complete
                </button>
              )}
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default UserArticle;