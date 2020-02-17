import React from 'react';
import Author from './Author';

export default class Post extends React.Component {
  render() {
    // const allComments = [
    //   <Comment message={this.props.comments[0]} />,
    //   <Comment message={this.props.comments[1]} />,
    //   <Comment message={this.props.comments[2]} />,
    // ];

    const allAuthors = this.props.authors.map(function(message, index) {
      return <Author key={index} message={message} />;
    });

    return <div>
      <h1>{this.props.title}</h1>
       {allAuthors}
      <p>{this.props.body}</p>
      <h2>Comments:</h2>
      <p>{this.props.comments}</p>
    </div>
  }
}



