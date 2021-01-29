import React, { Component } from 'react';
import CommentBox from 'components/CommentBox';
import CommentsList from 'components/CommentsList';

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
