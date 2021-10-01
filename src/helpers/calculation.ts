import {evaluate} from 'mathjs'
import { CalculatorState } from '../contexts/CalculatorContext'

interface ResultValues{
  resultData: string,
  equationValue : string
}
const symbols = ['/','*','-','+']
export const processNumber = ( stateValues: CalculatorState,input: string ): CalculatorState => {
  const {result, equation} = stateValues

  const [resultData, equationValue] = (symbols.includes(result[result.length -1 ] ))? 
                                        [input, equation + input]:
                                      (result === '0')? 
                                        [input, equation.slice(0,equation.length -1) + input]: 
                                        [result + input, equation + input]
  return {result: resultData, equation: equationValue }  
}


export  const processPeriod = ( stateValues: CalculatorState,input: string ): CalculatorState => {
  const {result, equation} = stateValues

  return ({result:'0', equation: '0'})

 /* return (!result.includes('.') || symbols.filter(sign => stageValue.includes(sign)).length === 0 )? 
          {resultData: stageValue + '.'}: 
          {resultData: stageValue}*/
}
/*
export const calculate = (stageValue: string, equationValue: string) =>{
  const value = (symbols.filter(sign => stageValue.includes(sign)).length !== 0)? [evaluate(equationValue), equationValue] :
                  (stageValue[stageValue.length -1] !== '.')? [evaluate(equationValue + stageValue + '0'), equationValue + stageValue + '0'] :
                  [evaluate(equationValue + stageValue), equationValue + stageValue]
  return({
    result: value[0],
    equation:value[1],
    resultData: '='
  })
}

export const processSigns = (stageValue: string, equationValue: string) =>{
  return({
    result: 0,
    equation: '0',
    resultData: '0'
  })
}

/*
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
*/