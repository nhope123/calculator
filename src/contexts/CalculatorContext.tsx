import React, { createContext, FC, useState } from 'react'
import { processEqualSign, processNumber, processPeriod, processSigns } from '../helpers/calculation'

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
    setData(
            (input === '=')? processEqualSign(data,input):
              (input === 'C')? defaultState:
                (input === '.')? processPeriod(data, input):
                  (typeof input === 'number')? processNumber(data, input.toString()):
                    processSigns(data, input.toString())
    )    
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
