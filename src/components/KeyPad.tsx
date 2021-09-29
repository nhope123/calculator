import { Button } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import { CalculatorContext } from '../contexts/CalculatorContext'
import ButtonSet from './ButtonSet'


const buttonValues = [
  ['C','/','*','-'],
  ['7','8','9','+'],
  ['4','5','6'],
  ['1','2','3','='],
  ['0','.',]

]

const KeyPad: FC = (props) => {

  const {setEquation} = useContext(CalculatorContext)

  return (
    <div>
      {/* Upper level button set */}
      <ButtonSet {...{content: buttonValues[0]}}   />
      {/* Middle level button set */}
      <div >
        <div >
          <ButtonSet {...{content: buttonValues[1].slice(0,3)}} />
          <ButtonSet {...{content: buttonValues[2].slice(0,3)}} />          
        </div>
        <ButtonSet {...{content: buttonValues[1].slice(3)}} />
      </div>
      {/* Lower level button set */}
      <div >
        <div >
          <ButtonSet {...{content: buttonValues[3].slice(0,3)}} />
          <div >
            <ButtonSet {...{content: buttonValues[4].slice(0,2)}} />
          </div>
        </div>
        <ButtonSet {...{content: buttonValues[3].slice(3)}} />
      </div>

    </div>
  )
}

export default KeyPad
