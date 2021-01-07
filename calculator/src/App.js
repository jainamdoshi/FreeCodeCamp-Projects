import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    )
  }
};

class Calculator extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      outputValues: {
        upperTextValue: "",
        lowerTextValue: ""
      }
    };

    this.handleNumbers = this.handleNumbers.bind(this);
  }

  handleNumbers(event) {
    let copyState = {...this.state};
    let outputs = {...this.state.outputValues};
    outputs.lowerTextValue = this.state.outputValues.lowerTextValue + event.target.value;
    copyState.outputValues = outputs;
    this.setState(copyState);

    
    console.log(event);
  }

  render() {
    return (
      <div className="calculator">
        {console.log("cal", this.state.outputValues)}
        <Output values={this.state.outputValues} />
        <KeysPad numbers={this.handleNumbers} />
      </div>
    )
  }
}

class Output extends Component {
  render() {
    return (
      <div className="output">
        {console.log("output", this.props.value)}
        <UpperText value={this.props.values.upperTextValue} />
        <LowerText value={this.props.values.lowerTextValue}/>
      </div>
    )
  }
}

class UpperText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }

  render() {
    return (
      <div className="upperText">{console.log("Upper", this.props.value)}{this.props.value}</div>
    )
  }
}

class LowerText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }
  }
  
  render() {
    return (
      <div className="lowerText">{console.log("Lower", this.props.value)}{this.props.value}</div>
    )
  }
}

class KeysPad extends Component {
  render() {

    const twoColumnStyle = {width: "15rem"};
    const equaleStyle = {
      position: "absolute",
      height: "15rem"};

    return (
      <div className="keysPad">
        <button id="allclear" style={twoColumnStyle} onClick={this.props.numbers} >ac</button>
        <button id="divide" onClick={this.props.numbers} >/</button>
        <button id="multiply" onClick={this.props.numbers} >x</button>
        <button id="nine" onClick={this.props.numbers} value="9" >9</button>
        <button id="eight" onClick={this.props.numbers} value="8" >8</button>
        <button id="seven" onClick={this.props.numbers} value="7" >7</button>
        <button id="subtract" onClick={this.props.numbers} >-</button>
        <button id="six" onClick={this.props.numbers} value="6" >6</button>
        <button id="five" onClick={this.props.numbers} value="5" >5</button>
        <button id="four" onClick={this.props.numbers} value="4" >4</button>
        <button id="add" onClick={this.props.numbers} >+</button>
        <button id="three" onClick={this.props.numbers} value="3" >3</button>
        <button id="two" onClick={this.props.numbers} value="2" >2</button>
        <button id="one" onClick={this.props.numbers} value="1" >1</button>
        <button id="equal" style={equaleStyle} onClick={this.props.numbers} >=</button>
        <button id="zero" style={twoColumnStyle} onClick={this.props.numbers} value="0" >0</button>
        <button id="decimal" onClick={this.props.numbers} value="." >.</button>
      </div>
    )
  }
}

