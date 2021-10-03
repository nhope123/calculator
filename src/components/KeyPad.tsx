import { Box, makeStyles } from '@material-ui/core'
import React, { FC} from 'react'
import ButtonSet from './ButtonSet'

const buttonValues = [
  [['C','clear'],['/','divide'],['*','multiply'],['-','subtract']],
  [[7,'seven'],[8,'eight'],[9,'nine'],['+','add']],
  [[4,'four'],[5,'five'],[6,'six']],
  [[1,'one'],[2,'two'],[3,'three'],['=','equals']],
  [[0,'zero'],['.','decimal']]
]

const useStyles = makeStyles((theme) => ({
  topRow:{
    width: '100%',
    height: '65px',
  }
}))

const KeyPad: FC = (props) => {



  return (
    <Box >
      {/* Upper level button set */}
      <Box >
        <ButtonSet {...{content: buttonValues[0]}}   />
      </Box >
      {/* Middle level button set */}

      <br/> <br/>
      <div >
        <div >
          <ButtonSet {...{content: buttonValues[1].slice(0,3)}} />
          <br/>
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

    </Box >
  )
}

export default KeyPad
