import React, { createContext, FC, useState } from 'react'
import { processNumber, processPeriod, processSigns } from '../helpers/calculation'
import {evaluate} from 'mathjs'

interface CalculatorState{
  result: string ,
  equation: string
}

interface ContextValues{
  data: CalculatorState,
  setButtonInput: (input: string | number) => void
}

const defaultState = {result: '0', equation: '0'}
const CalculatorContext =  createContext<ContextValues>(null as never)

const CalculatorContextProvider: FC = (props) => {

  const [data, setData] = useState<CalculatorState>(defaultState)

  const setButtonInput = (input: string | number) =>{
    // Process input
    //console.log(input);
    if(input === '='){
      const solve = evaluate(data.equation)
      setData({result: solve, equation: data.equation + '=' + solve})
    } 
    else if(input === 'C'){ setData(defaultState) }
    else if(input === '.'){setData(()=> processPeriod(data, input))}
    else if(typeof input === 'number'){
      setData(()=> processNumber(data, input.toString()))
    }
    else{
      setData(()=> processSigns(data, input.toString()))
    }
    
    
  }

  return (
    <CalculatorContext.Provider value={{
      data,
      setButtonInput
    }} >
      {props.children}
    </CalculatorContext.Provider >
  )
}

export default CalculatorContext
export {
  CalculatorContextProvider,
}
export type {
  CalculatorState
}
