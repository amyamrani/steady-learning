import React, { Component } from 'react';
import SetTopicForm from '../SetTopicForm/SetTopicForm';
import './SetTopicPage.css';
import APIContext from '../APIContext';

class SetTopicPage extends Component {
  static contextType = APIContext;

  render() {
    return (
      <div className='page-container'>
        <h1 className='section-title'>Set Topic</h1>

        <section className='dashboard-articles'>
          <SetTopicForm topic={this.context.topic} />
        </section>
      </div>
    )
  }
}

export default SetTopicPage;