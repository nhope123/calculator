import { Box, Grid, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { FC} from 'react'
import ButtonSet from './ButtonSet'

const buttonValues = [
  [
    ['C','clear','regular','reset'],
    ['/','divide','regular','sign'],
    ['*','multiply','regular','sign'],
    ['-','subtract','regular','sign']
  ],
  [
    [7,'seven','regular','number'],
    [8,'eight','regular','number'],
    [9,'nine','regular','number'],
    ['+','add','vertical','sign']
  ],
  [
    [4,'four','regular','number'],
    [5,'five','regular','number'],
    [6,'six','regular','number']
  ],
  [
    [1,'one','regular','number'],
    [2,'two','regular','number'],
    [3,'three','regular','number'],
    ['=','equals','vertical','sign']
  ],
  [
    [0,'zero','horizontal','number'],
    ['.','decimal','regular','number']
  ]
]

const useStyles = makeStyles((theme) => ({
  topRow:{
    height: '65px',
  },
  commonRow:{
    width: '100%',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}))

const KeyPad: FC = (props) => {

  const classes = useStyles()

  return (
    <Box >
      {/* Upper level button set */}
      <Box className={clsx([classes.topRow,classes.commonRow])} >
        <ButtonSet {...{content: buttonValues[0]}}   />
      </Box >
      {/* Middle level button set */}
      <Box className={classes.commonRow}>
        <Grid >
          <ButtonSet {...{content: buttonValues[1].slice(0,3)}} />
          <br/>
          <ButtonSet {...{content: buttonValues[2].slice(0,3)}} />          
        </Grid >        
          <ButtonSet {...{content: buttonValues[1].slice(3)}} />        
      </Box>
      {/* Lower level button set */}
      <Box className={classes.commonRow} >
        <Grid  >
          <ButtonSet {...{content: buttonValues[3].slice(0,3)}} />
          <br/>
          <ButtonSet {...{content: buttonValues[4].slice(0,2)}} />          
        </Grid>
        <ButtonSet {...{content: buttonValues[3].slice(3)}} />
      </Box>
    </Box >
  )
}

export default KeyPad
