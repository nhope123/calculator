import React from 'react'
import './index.css';



class Button extends React.Component{
  render(){
    return(
        <button type="button" value={this.props.value} id={this.props.id}>
          {this.props.value}
        </button>
      
    );

  }
}

export class Calculator extends React.Component{

  render(){
    console.log('Calculator');
    return(
      <section id="calculator-container">
        <div id='display' > life</div>
        <article id='button-pad' >
          {/* First row of buttons */}
          <Button {...{id:'clear', value:'C'}} />
          <Button {...{id:'divide', value:'/'}} />
          <Button {...{id:'multiply', value:'*'}} />
          <Button {...{id:'subtract', value:'-'}} />
          {/* First row of buttons */}
          <Button {...{id:'seven', value: 7}} />
          <Button {...{id:'eight', value: 8}} />
          <Button {...{id:'nine', value:9}} />
          <Button {...{id:'add', value: '+'}} />
          {/* First row of buttons */}
          <Button {...{id:'four', value: 4}} />
          <Button {...{id:'five', value: 5}} />
          <Button {...{id:'six', value: 6}} />
          {/* First row of buttons */}
          <Button {...{id:'one', value: 1}} />
          <Button {...{id:'two', value: 2}} />
          <Button {...{id:'three', value: 3}} />
          {/* First row of buttons */}
          <Button {...{id:'zero', value:0}} />
          <Button {...{id:'decimal', value:'.'}} />
          <Button {...{id:'equals', value:'='}} />

        </article>
      </section>
    );
  }
}
