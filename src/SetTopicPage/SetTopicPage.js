import React, { Component } from 'react';
import SetTopicForm from '../SetTopicForm/SetTopicForm';
import APIContext from '../APIContext';

class SetTopicPage extends Component {
  static contextType = APIContext;

  render() {
    return (
      <div className='page-container'>
        <h1 className='section-title'>Set Topic</h1>

        <section>
          <SetTopicForm topic={this.context.topic} />
        </section>
      </div>
    )
  }
}

export default SetTopicPage;