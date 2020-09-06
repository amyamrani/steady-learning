import React, { Component } from 'react';
import SetTopicForm from '../SetTopicForm/SetTopicForm';
import './SetTopicPage.css';
import APIContext from '../APIContext';

class SetTopicPage extends Component {
  static contextType = APIContext;

  render() {
    return (
      <div className='set-topic-page'>
        <header>
          <h1>Set Topic</h1>
        </header>

        <section>
          <SetTopicForm topic={this.context.topic} />
        </section>
      </div>
    )
  }
}

export default SetTopicPage;