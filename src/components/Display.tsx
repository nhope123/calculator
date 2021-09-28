import React, { FC, useContext } from 'react'
import {CalculatorContext} from '../contexts/CalculatorContext'

const Display: FC = (props) => {
  const {result, equationInputString} = useContext(CalculatorContext)
  return (
    <div>
      <div >{equationInputString}</div>
      <div >{result}</div>
    </div>
  )
}

export default Display
