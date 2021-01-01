import React from 'react';
import Hello from './Hello';

class App extends React.Component{
  render() {

    const person = {
      name: 'Ranen Khlabi',
      age: 0,
      favorite: [
        'Westworld ',
        'Person of Interest ',
        'Scrubs ',
        'Futirama ',
        'Tha West Wing',
      ],
    };

    return (
      <div>
    {/* <h1>Hello World {40 + 2}</h1>
    <h1>React to this!</h1> */}
    < Hello 
    name={person.name} 
    age={person.age}
    favorite = {person.favorite}/>
    </div>
    );
  }
}

export default App;