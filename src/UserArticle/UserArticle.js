import React, { Component } from 'react';
import './UserArticle.css';

class UserArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: props.completed,
    }
  };

  save = (completed) => {
    this.setState({ completed: completed });
  };

  render() {
    return (
      <div className='user-article'>          
        <section>
          <header>
            <h3>{this.props.date}</h3>
            <a href={this.props.url}>{this.props.title}</a>
          </header>
          
          <form>
            <div>
              <input
                type='checkbox'
                id='completed'
                name='completed'
                value='true'
                checked={this.state.completed}
                onChange={e => this.save(e.target.checked)}
              />
              
              <label htmlFor='completed'>Completed</label>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default UserArticle;