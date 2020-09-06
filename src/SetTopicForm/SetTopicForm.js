import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SetTopicForm.css';
import APIContext from '../APIContext';
import { withRouter } from 'react-router-dom';

class SetTopicForm extends Component {
  static contextType = APIContext;

  static defaultProps = {
    topic: '',
  };

  static propTypes = {
    topic: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      topic: props.topic,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.setTopic(this.state.topic);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <form id='record-topic' onSubmit={this.handleSubmit}>
        <div className='form-section'>
          <label htmlFor='topic-title'>Topic</label>

          <div>
            <select
              value={this.state.topic}
              onChange={e => this.setState({ topic: e.target.value })}
            >
              <option value=''>Select</option>
              <option value='Cooking Basics'>Cooking Basics</option>
              <option value='Basic Home Repairs'>Basic Home Repairs</option>
            </select>
          </div>
        </div>

        <div className='form-section'>
          <label htmlFor='days'># of Consecutive Days to receive daily information about above topic:</label>

          <div>
            <input
              type='number'
              name='days'
              placeholder='max 5 days'
              min={1}
              max={5}
            />
          </div>
        </div>

        <button type='submit'>Start Learning!</button>
      </form>
    )
  }
}

export default withRouter(SetTopicForm);