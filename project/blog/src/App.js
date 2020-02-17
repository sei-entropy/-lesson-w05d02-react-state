import React from 'react';
import Prompt from './Prompt';

class App extends React.Component{
  render() {

    const person = {
      title: "Dinosaurs are awesome",
      authors: [
        "Written by Stealthy Stegosaurus",
        "Written by Tiny trex",
        "Written by lguanadon lvory"
      ],
      body: "Check out this body property!",
      comments: "First!",
    };

    return (
      <div>
    < Prompt 
    title={person.title} 
    authors = {person.authors}
    body={person.body}
    comments={person.comments}/>
    </div>
    );
  }
}

export default App;