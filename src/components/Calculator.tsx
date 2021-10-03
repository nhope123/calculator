import { Box,IconButton, makeStyles, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
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
    width: '273px',
    backgroundColor: '#82cce9',
    borderRadius: '10px',
  },
  footer:{
    marginTop: '45px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    color: 'white',
    width: 'auto',
  },
  text:{
    fontWeight: 'bold',
    fontStyle: 'italic',
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
      <Box className={classes.footer} >
        <Box m={3} >
          <Typography className={classes.text}>{'by Nial'}</Typography>
        </Box>
        <IconButton  >
        <a href="https://github.com/nhope123/calculator" title='github repo' target='_top' rel="noopener noreferrer" >
          <GitHubIcon className={classes.icon} />
        </a>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Calculator
