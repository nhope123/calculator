import React, {createContext, FC, useState}from 'react'


interface CalculatorContextState{
  result?: number,
  setResult?: any,
  equationInputString?: string, 
  setEquation?: any,
}


export const CalculatorContext = createContext<CalculatorContextState >(null as never)

const CalculatorContextProvider: FC = (props) => {
  const [result, setResult] = useState(0)
  const [equationInputString, setEquationInputString] = useState('0')

  const formatEquation = (symbol: string) =>{
    setEquationInputString(symbol)
  }

  return (
    <div>
      <CalculatorContext.Provider value={{
        result, 
        setResult,
        equationInputString, 
        setEquation: formatEquation
        }} >
        {props.children}
      </CalculatorContext.Provider >      
    </div>
  )
}

export default CalculatorContextProvider
