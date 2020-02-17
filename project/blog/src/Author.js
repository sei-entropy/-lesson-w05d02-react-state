  import React from 'react';

export default class Author extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: 0,
    };
}

increaseMood = (e) => {
    console.log('Button Clicked');

    this.setState({
      body: this.state.body + 1 ,

    });
}


  render() {
    return (
      <div>
    <p>{this.props.message}</p>
    <hr/>
    <p>You are this happey: {this.state.body}</p>
    <button onClick={this.increaseMood}>Eadit body</button>
    </div>
    )
  }
} 