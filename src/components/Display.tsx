import React, { FC, useContext } from 'react'
import CalculatorContext from '../contexts/CalculatorContext'

const Display: FC = () => {  
  
  const {data} = useContext(CalculatorContext)
  return (
    <div >
      <div >{data?.equation}</div>
      <div id={'display'} >{data?.result}</div>
    </div>
  )
}

export default Display
