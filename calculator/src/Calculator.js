import React, { Component } from "react";

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input1: "",
            input2: "",
            result: ""
        };
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

        this.sum();
    };

    sum() {
        if (this.state.input1 !== "" && this.state.input2 !== "") {
            const sum =
                parseInt(this.state.input1) + parseInt(this.state.input2);
            console.log(sum);

            this.setState({
                result: sum
            });
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input
                        type="text"
                        name="input1"
                        value={this.state.input1}
                        onChange={this.changeHandler}
                    />
                    <span>+</span>
                    <input
                        type="text"
                        name="input2"
                        value={this.state.input2}
                        onChange={this.changeHandler}
                    />
                    <span>=</span>
                    <h3>{this.state.result}</h3>
                </div>
            </div>
        );
    }
}

export default Calculator;
