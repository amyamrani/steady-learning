import React, { Component } from 'react';
import './SetTopicForm.css';

class SetTopicForm extends Component {
  render() {
    return (
      <form id='record-topic'>
        <div className='form-section'>
          <label htmlFor='topic-title'>Select Topic:</label>
          <select>
            <option>Cooking Basics</option>
            <option>Programming</option>
          </select>
        </div>
        <div className='form-section'>
          <label htmlFor='days'># of Consecutive Days to receive daily information about above topic:</label>
          <input type='number' name='days' placeholder='max 10 days' />
        </div>
        <button type='submit'>Start Learning!</button>
        <button type='reset'>Reset</button>
      </form>
    )
  }
}

export default SetTopicForm;