import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentsList from './CommentsList';

class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentsList />
      </div>
    );
  }
}

export default App;
