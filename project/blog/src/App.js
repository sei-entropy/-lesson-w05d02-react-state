import React from 'react';
import Post from './Post';

export default class App extends React.Component {
  render() {
    const post = {
      title: "Dinosaurs are awesome",
      authors: [
        "Written by Stealthy Stegosaurus",
        "Written by Tiny trex",
        "Written by lguanadon lvory"
      ],
      body: "Check out this body property!",
      comments: "First!",
    };

    return <div>
      <Post title={post.title}
                  authors={post.authors}
                  body={post.body}
                  comments={post.comments} />
    </div>
  }
}