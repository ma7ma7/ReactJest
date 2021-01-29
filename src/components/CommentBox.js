import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        ></textarea>
        <button>Add Comment</button>
      </form>
    );
  }
}

export default CommentBox;
