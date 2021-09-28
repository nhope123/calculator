import { Box } from '@material-ui/core'
import React, { FC } from 'react'
import CalculatorContextProvider from '../contexts/CalculatorContext'
import Display from './Display'
import KeyPad from './KeyPad'

const Calculator: FC = (props) => {
  
  return (
    <Box >
      <CalculatorContextProvider >
        <Display />
        <KeyPad />
      </CalculatorContextProvider>
      
    </Box>
  )
}

export default Calculator
