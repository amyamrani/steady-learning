import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SetTopicForm.css';
import APIContext from '../APIContext';
import { withRouter } from 'react-router-dom';
import config from '../config';

class SetTopicForm extends Component {
  static contextType = APIContext;

  static defaultProps = {
    topic: '',
    days: '',
  };

  static propTypes = {
    topic: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      topic: props.topic,
      days: props.days,
      errorMessage: undefined,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({errorMessage: undefined})

    const newPlan = {
      topic: this.state.topic,
      day_count: this.state.days,
    }

    const authToken = localStorage.getItem('authToken')

    fetch(`${config.API_BASE_URL}/api/plans`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(newPlan)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            this.setState({errorMessage: error.error.message})
          })
        } else {
          this.props.history.push('/dashboard');
        }
      })
      .catch(err => {
        this.setState({errorMessage: 'Please try again.'})
      });
  }

  retry = () => {
    this.setState({errorMessage: undefined})
    this.props.history.push('/set_topic')
    this.props.history.goBack()
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <div>
          <h1>
            Error!
          </h1>

          <p>{this.state.errorMessage}</p>

          <button onClick={this.retry}>Retry</button>
        </div>
      )
    }
    return (
      <form id='record-topic' onSubmit={this.handleSubmit}>
        <div className='form-section'>
          <label htmlFor='topic-title'>Topic</label>

          <div>
            <select
              required
              value={this.state.topic}
              onChange={e => this.setState({ topic: e.target.value })}
            >
              <option value=''>Select</option>
              <option value='Cooking Basics'>Cooking Basics</option>
              <option value='Things Everyone Should Know How To Do'>Things Everyone Should Know How To Do</option>
              <option value='Basic Home Repairs'>Basic Home Repairs</option>
              <option value='Survival Skills'>Survival Skills</option>
              <option value='Stock Market Basics'>Stock Market Basics</option>
            </select>
          </div>
        </div>

        <div className='form-section'>
          <label htmlFor='days'># of Consecutive Days to receive daily information about above topic:</label>

          <div>
            <input
              required
              onChange={(e) => this.setState({ days: e.target.value })}
              type='number'
              name='days'
              placeholder='max 5 days'
              min={-10}
              max={5}
              value={this.state.days}
            />
          </div>
        </div>

        {this.state.errorMessage && (
          <div>
            {this.state.errorMessage}
          </div>
        )}

        <button type='submit'>Start Learning!</button>
      </form>
    )
  }
}

export default withRouter(SetTopicForm);