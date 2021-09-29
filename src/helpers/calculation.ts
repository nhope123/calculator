import {evaluate} from 'mathjs'

interface ResultValues{
  stagingData: string,
  equation: string
}
const symbols = ['/','*','-','+']
export const processNumber = (stageValue:string, equationValue: string, input: string | number): ResultValues => {
  const [stagingData, equation] = (symbols.includes(stageValue[stageValue.length -1 ] ))? 
                                  [input.toString(), equationValue + stageValue]:
                                (stageValue === '0')? 
                                  [input.toString(), equationValue]: 
                                  [stageValue + input, equationValue]
  return {stagingData, equation }  
}

export  const processPeriod = (stageValue: string) =>{
  return (!stageValue.includes('.') || symbols.filter(sign => stageValue.includes(sign)).length === 0 )? 
          {stagingData: stageValue + '.'}: 
          {stagingData: stageValue}
}

export const calculate = (stageValue: string, equationValue: string) =>{
  const value = (symbols.filter(sign => stageValue.includes(sign)).length !== 0)? [evaluate(equationValue), equationValue] :
                  (stageValue[stageValue.length -1] !== '.')? [evaluate(equationValue + stageValue + '0'), equationValue + stageValue + '0'] :
                  [evaluate(equationValue + stageValue), equationValue + stageValue]
  return({
    result: value[0],
    equation:value[1],
    stagingData: '='
  })
}

export const processSigns = (stageValue: string, equationValue: string) =>{
  return({
    result: 0,
    equation: '0',
    stagingData: '0'
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