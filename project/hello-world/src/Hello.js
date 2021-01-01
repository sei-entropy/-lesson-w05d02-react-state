import React from 'react';

export default class Hello extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            moodPoints: 0,
            // loggedIn: false,
        };
    }

    increaseMood = (e) => {
        console.log('Button Clicked');

        this.setState({
            moodPoints: this.state.moodPoints + 1 ,

        });
    }

    render(){   
        return (
        <div>
            <h1>Hello {this.props.name}!</h1>
            <p>You are {this.props.age} years old.</p>
            <p>
                {this.props.favorite}
                </p>
                <hr/>
                <p>You are this happey: {this.state.moodPoints}</p>
                <button onClick={this.increaseMood}>cheer up!</button>
                </div>
                );
            }
        }

