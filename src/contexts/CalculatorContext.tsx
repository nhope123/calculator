import React, {createContext, FC, useState}from 'react'

interface ContextValues{
  result?: number,
  setResult?:any,
  equationInputString?: string, 
  setEquationInputString?: any,
}


const CalculatorContext = createContext<ContextValues >({})

const CalculatorContextProvider: FC= (props) => {
  const [result, setResult] = useState(0)
  const [equationInputString, setEquationInputString] = useState('0')
  return (
    <div>
      <CalculatorContext.Provider value={{
        result, 
        setResult,
        equationInputString, 
        setEquationInputString
        }} >
        {props.children}
      </CalculatorContext.Provider>
      
    </div>
  )
}

export default CalculatorContextProvider
