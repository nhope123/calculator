import React, {createContext, FC, useState}from 'react'
import { calculate, processNumber, processPeriod, processSigns } from '../helpers/calculation'


interface CalculatorContextProps{
  data?: CalculatorContextState,
  setResult?: any,
  equationInputString?: string, 
  setEquation?: any,
}

interface CalculatorContextState{
  result: number,
  equation: string,
  stagingData: string
}

const defaultState = {result: 0, equation: '0', stagingData: '0'}

export const CalculatorContext = createContext<CalculatorContextProps >(null as never)

const CalculatorContextProvider: FC = (props) => {

  const [calculatorData, setCalculatorData] = useState<CalculatorContextState>( defaultState )

  const formatEquation = (symbol: string) =>{
    (symbol === 'C')? setCalculatorData(()=> defaultState) :
      (symbol === '.')? setCalculatorData(state=>({
        ...state,
        ...processPeriod( calculatorData?.stagingData 
      )}) ):
        (symbol === '=')? setCalculatorData(state=>({
          ...state,
          ...calculate(calculatorData?.stagingData, calculatorData?.equation)
        })):
      (typeof symbol === 'number')? setCalculatorData(state =>({
        ...state, 
        ...processNumber(calculatorData?.stagingData, calculatorData?.equation, symbol)
      })) : 
      setCalculatorData(state=>({
        ...state,
        ...processSigns(calculatorData?.stagingData, calculatorData?.equation)
      }))
  
  }

  return (
    <div>
      <CalculatorContext.Provider value={{
        data: calculatorData,
        setEquation: formatEquation
        }} >
        {props.children}
      </CalculatorContext.Provider >      
    </div>
  )
}

export default CalculatorContextProvider
