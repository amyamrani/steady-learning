import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import UserArticle from './UserArticle';

it('UserArticle renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserArticle />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});