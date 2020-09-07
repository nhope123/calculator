import React from 'react'
import {evaluate} from 'mathjs'
import './index.css';

// Gobal variables
let sign = ["/","*","-","+"];
let numbers = ["1","2","3","4","5","6","7","8","9"];


class Button extends React.Component{
  render(){
    return(
        <button type="button" value={this.props.value} id={this.props.id} onClick={this.props.click}>
          {this.props.value}
        </button>
    );
  }
}

export class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
                  outputValue: '0',
                  inputValue: '0'
                };
    this.initialize = this.initialize.bind(this);
    this.putNumbers = this.putNumbers.bind(this);
    this.putSign    = this.putSign.bind(this);
    this.putDecimal = this.putDecimal.bind(this);
    this.putZero    = this.putZero.bind(this);
    this.calculate  = this.calculate.bind(this);
    this.excessOp   = this.excessOp.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }
  componentDidMount(){
    document.addEventListener('keydown', this.keyPressed);
  }
/*  componentWillUnmount(){
    document.addEventListener('keypress', this.keyPressed);
  }*/
  keyPressed(event){
    console.log('keypress' + event.keyCode);
    // if key pressed is a number
    if ((event.keyCode > 48 && event.keyCode < 58 ) || (event.keyCode > 96 && event.keyCode < 106 )) {
      this.putNumbers(event);
    }
    else if ([106, 109, 107, 111, 191].includes(event.keyCode)) {
      this.putSign(event);
    }
    else if (event.keyCode === 48 || event.keyCode === 96) {
      this.putZero(event);
    }
    else if (event.keyCode === 46 || event.keyCode === 110) {
      this.putDecimal();
    }
  }
  // Evaluate the diaplay expression and add result
  calculate(){
    var input  = this.state.inputValue;
    var output = this.state.outputValue;
    if (sign.includes(input)) {
      output = this.excessOp();
    }
    else if (input[input.length -1] === '.') {
      output += '0';
    }
    var num = evaluate(output) + '';
    // display result of evaluation
    this.setState({outputValue: (output + "=" + num ), inputValue: num});
  }
  // inputed zero is added to display
  putZero(event){
    var eqSign = (event.type === 'keydown') ? event.key : event.target.value
    var input  = this.state.inputValue;
    var output = this.state.outputValue;

    if (output.includes('=') || input === 'Infinity' || input === 'NaN') {
      this.initialize();
    }
    else if ( !(input === '0' || (input[input.length -1] === '0' && !input.includes('.') && !numbers.includes(input[0])))){
      if (sign.includes(input)) {
        this.setState({outputValue: (output + eqSign), inputValue: eqSign});
      }
      else {
        this.setState({outputValue: (output + eqSign), inputValue: (input + eqSign)});
      }
    }
  }
  // removes consecutive signs
  excessOp(){
    var output = this.state.outputValue;
    while (sign.includes(output[output.length -1])) {
      output = output.slice(0,(output.length -1));
    }
    return output;
  }
  // inputed decimal is added to display
  putDecimal(){
    var eqSign = '.';

    var input = this.state.inputValue;
    var output = this.state.outputValue;

    if (input === 'Infinity' || input === 'NaN') { // Adding decimal after Infinity or NaN error
      this.initialize();
    }
    else if (output.includes('=')) { // Decimal after evaluation
      this.setState({outputValue: '0.', inputValue: '0.'});
    }
    else if (sign.includes(input)){
      this.setState({outputValue: (output + '0.'),
                     inputValue: '0.'});
    }
    // If decimal not following a sign or input doesnot contain  decimal
    else if (!(sign.includes(input) ||  input.includes("."))) {
      this.setState({outputValue: (output + eqSign),
                     inputValue: (input + eqSign)});
    }
  }
  // inputed sign is added to display
  putSign(event){
    // if value from keypress use key else use target value
    var eqSign = (event.type === 'keydown') ? event.key : event.target.value

    var input = this.state.inputValue;
    var output = this.state.outputValue;
    var badSign = ['/','*','+'];

    if (input === 'Infinity' || input === 'NaN') {
      this.initialize();
    }
    else if (output.includes('=')) {
      this.setState({outputValue: (input + eqSign), inputValue: eqSign});
    }
    else if( input === '-' || (badSign.includes(eqSign) && sign.includes(input))){
      this.setState({outputValue: (this.excessOp() + eqSign), inputValue: eqSign});
    }
    else if( input[input.length - 1] === ".") {  // If last input is decimal add 0 then sign
      this.setState({outputValue: (output + '0' + eqSign), inputValue: eqSign});
    }
    else{ // add sign to display
      this.setState({outputValue: (output + eqSign), inputValue: eqSign});
    }
  }
  // inputed number is added to display
  putNumbers(event){
    // if value from keypress use key else use target value
    var num = (event.type === 'keydown') ? event.key : event.target.value

    var input = this.state.inputValue;
    var output = this.state.outputValue;
    if (output.includes('=')) {
      this.setState({outputValue: num, inputValue: num});
    }
    else if (input === '0') { // Only input number is zero
      if (output === '0') { // Only output number is zero
        this.setState({outputValue: num, inputValue: num}); // discard it add new number to both
      }else {
        this.setState({outputValue: (output + num), inputValue: num}); // Concatenate display
      }
    }
    else if (sign.includes(input)) {
      this.setState({outputValue: (output + num), inputValue: num}); // Concatenate display
    }
    else if (input.includes('Infinity')) {
      this.setState({outputValue: num, inputValue: num});
    }
    else{ // preceed by number or decimal
      this.setState({outputValue: (output + num), inputValue: (input + num)});
    }
  }
  // Returns the calculator to its initialized state
  initialize(){
    this.setState({outputValue: '0', inputValue: '0'});
  }
  render(){

    return(
      <section id="calculator-container">
        <div id='cal-display' >
          <div id='output' >
            {this.state.outputValue}
          </div>
          <div id='display' >
            {this.state.inputValue}
          </div>

        </div>
        <article id='button-pad' >
          {/* First row of buttons */}
          <Button {...{id:'clear', value:'C', click: this.initialize }} />
          <Button {...{id:'divide', value: sign[0], click: this.putSign }} />
          <Button {...{id:'multiply', value: sign[1], click: this.putSign }} />
          <Button {...{id:'subtract', value: sign[2], click: this.putSign }} />
          {/* First row of buttons */}
          <Button {...{id:'seven', value: numbers[6], click: this.putNumbers}} />
          <Button {...{id:'eight', value: numbers[7], click: this.putNumbers}} />
          <Button {...{id:'nine', value:numbers[8], click: this.putNumbers}} />
          <Button {...{id:'add', value: sign[3], click: this.putSign }} />
          {/* First row of buttons */}
          <Button {...{id:'four', value: numbers[3], click: this.putNumbers}} />
          <Button {...{id:'five', value: numbers[4], click: this.putNumbers}} />
          <Button {...{id:'six', value: numbers[5], click: this.putNumbers}} />
          {/* First row of buttons */}
          <Button {...{id:'one', value: numbers[0], click: this.putNumbers}} />
          <Button {...{id:'two', value: numbers[1], click: this.putNumbers}} />
          <Button {...{id:'three', value: numbers[2], click: this.putNumbers}} />
          {/* First row of buttons */}
          <Button {...{id:'zero', value: '0', click: this.putZero}} />
          <Button {...{id:'decimal', value:'.', click: this.putDecimal }} />
          <Button {...{id:'equals', value:'=', click: this.calculate}} />

        </article>
      </section>
    );
  }
}
