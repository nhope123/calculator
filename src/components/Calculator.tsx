import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import Display from './Display'
import KeyPad from './KeyPad'

const useStyles = makeStyles((theme) => ({
  main:{
    backgroundColor: '#275f72',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body:{
    width: '300',
    backgroundColor: '#82cce9',
    borderRadius: '10px',


  }
}))

const Calculator: FC = (props) => {  
  const classes = useStyles()
  return (
    <Box className={classes.main}>
      <Box p={2} boxShadow={12} className={classes.body}>
        <Display />
        <KeyPad />
      </Box >
      <div id='credit' >
        <Typography >{'by Nial'}</Typography>
        
        <a href="https://github.com/nhope123/calculator" title='github repo' target='_blank' rel="noopener noreferrer" >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </Box>
  )
}

export default Calculator
