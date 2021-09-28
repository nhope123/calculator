import React, { FC } from 'react'
import CalculatorContextProvider from '../contexts/CalculatorContext'
import Display from './Display'
import KeyPad from './KeyPad'

const Calculator: FC = (props) => {
  
  return (
    <div className={'calculator-body'} >
      <CalculatorContextProvider >
        <Display />
        <KeyPad />
      </CalculatorContextProvider>
      
    </div>
  )
}

export default Calculator
