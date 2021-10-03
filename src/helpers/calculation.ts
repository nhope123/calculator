import {evaluate} from 'mathjs'
import { CalculatorState } from '../contexts/CalculatorContext'

const symbols = ['/','*','-','+']

export const processNumber = ( stateValues: CalculatorState,input: string ): CalculatorState => {
  const {result, equation} = stateValues

  const [resultData, equationValue] = (equation.includes('='))? [input,input] :
                                      (symbols.includes(result[result.length -1 ] ))? 
                                        [input, equation + input]:
                                      (result === '0')? 
                                        [input, equation.slice(0,equation.length -1) + input]: 
                                        [result + input, equation + input]
  return {result: resultData, equation: equationValue }  
}

export  const processPeriod = ( stateValues: CalculatorState,input: string ): CalculatorState => {
  const {result, equation} = stateValues

  return (result.split('').filter(sign => symbols.includes(sign)).length !== 0 )? 
          ({result:'0.', equation: equation + '0.'}) : 
            (result.includes('.'))?
              ({result, equation}):
                ({result: result + '.' , equation: equation + '.'})
}

export const processSigns = ( stateValues: CalculatorState, input: string ): CalculatorState => {
  const {result, equation} = stateValues

  const noSymbols = (result.split('').filter(sign => symbols.includes(sign)).length === 0) 

  const testResult = (input === '-' && result.length === 1 )? (result + input) : input
  const testEquation = (equation.includes('='))? (result + input): 
                        ((result.length === 1 && input === '-') ||(noSymbols))? (equation + input):
                        (result[result.length -1] === '.')? (equation + '0' + input):
                        (equation.slice(0,(equation.length - result.length)) + input)

  return({result: testResult, equation: testEquation})
}

export const processEqualSign = ( stateValues: CalculatorState, input: string ): CalculatorState => {
  const {result,equation} = stateValues

  if( equation.includes('=')){return stateValues}
  const newEquation = (result.split('').filter(sign => symbols.includes(sign)).length !== 0)?
                    (equation.slice(0,(equation.length - result.length))): equation
  const solution = evaluate(newEquation).toString()
  console.log(solution);
  
  return ({
    result: solution,
    equation: newEquation + '=' + solution
  })
}