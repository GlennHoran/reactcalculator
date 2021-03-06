import React from 'react';
import axios from 'axios';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num1: '',
        num2: '',
        result: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        axios.get(`http://localhost:8080/sum?num1=${this.state.num1}&num2=${this.state.num2}`)
            .then(res => {
                this.setState({ result: res.data });
            }).catch(err => {
                this.setState({result: "Please enter two numbers"})
        })
    }

    render() {
        return (
            <div className = "calculator">
                <div className="input">
                    Number 1:  <input  name= "num1" value={this.state.num1} onChange={this.handleChange} type = "number"/>
                </div>
                <div className="input">
                    Number 2:  <input name = "num2" value={this.state.num2} onChange={this.handleChange}  type = "number"/>
                </div>
                <div className="button">
                    <button className = "button" onClick={this.handleSubmit}>Calculate Result</button>
                </div>
                <div className="result">Result: {this.state.result}</div>
            </div>
        )
    }
}
