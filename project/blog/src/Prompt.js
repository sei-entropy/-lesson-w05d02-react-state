import React from 'react';
import Body from './Body';

export default class Prompt extends React.Component{
    constructor(props){
        super(props);
        this.state={text: ''};

        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);
        // alert("Yaaaa" + this.state.text);
      }
        handleChange = (event) => {
          this.setState({text: event.target. value});
        }
        



    render(){ 
      
      const allAuthors = this.props.authors.map(function(message, index) {
        return <Body key={index} message={message} />
      });

        return (
        <div>
            <h1> {this.props.title} </h1>
            {allAuthors}
                <p>
                {this.props.favorite}
                </p>
                <p>{this.props.body}</p>

                <form onSubmit={this.handleSubmit}>
                <h1>{this.state.text}</h1>
                  <input type="text" onChange={this.handleChange}/>
                <button>Edit Body</button>
                </form>

                <h2>Comments:</h2>
                <p>{this.props.comments}</p>
                </div>
                );
            }
        }
      
