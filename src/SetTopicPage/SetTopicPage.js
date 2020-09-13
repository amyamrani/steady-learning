import React, { Component } from 'react';
import SetTopicForm from '../SetTopicForm/SetTopicForm';
import './SetTopicPage.css';
import APIContext from '../APIContext';

class SetTopicPage extends Component {
  static contextType = APIContext;

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     userId: "",
  //     topic: "",
  //     dayCount: "",
  //   }
  // }

  // handleSubmit = (e) => {
  //   const userArticle = {
  //     user_id: this.state.userId,
  //     topic: this.state.topic,
  //     day_count: this.state.dayCount,
  //   };

  //   const authToken = localStorage.getItem('authToken')

  //   fetch(`${config.API_BASE_URL}/api/user_articles`, {
  //     method: 'POST',
  //     headers: {
  //       "content-type": "application/json",
  //       'Authorization': `Bearer ${authToken}`,
  //     },
  //     body: JSON.stringify(user)
  //   })
  //     .then((res) => {
  //       return !res.ok
  //         ? res.json().then((e) => Promise.reject(e))
  //         : res.json();
  //     })
  //     .then(async (res) => {
  //       this.context.setTopic(userArticle);
  //     })
  //     .catch(err => {
  //       this.setState({errorMessage: "Topic and day count are required."})
  //     });

  //   e.preventDefault();
  // }

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