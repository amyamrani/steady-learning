import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import SetTopicForm from '../SetTopicForm/SetTopicForm';
import Footer from '../Footer/Footer';
import './SetTopicPage.css';

class SetTopicPage extends Component {
  render() {
    return (
      <div className='set-topic-page'>
        <Nav />
        <main>
          <header>
            <h1>New Topic</h1>
          </header>
          <section>
            <SetTopicForm />
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default SetTopicPage;