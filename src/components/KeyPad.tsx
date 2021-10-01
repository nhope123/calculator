import React, { FC} from 'react'
import ButtonSet from './ButtonSet'

const buttonValues = [
  [['C','clear'],['/','divide'],['*','multiply'],['-','subtract']],
  [[7,'seven'],[8,'eight'],[9,'nine'],['+','add']],
  [[4,'four'],[5,'five'],[6,'six']],
  [[1,'one'],[2,'two'],[3,'three'],['=','equals']],
  [[0,'zero'],['.','decimal']]
]

const KeyPad: FC = (props) => {

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
