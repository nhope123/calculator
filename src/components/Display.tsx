import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import CalculatorContext from '../contexts/CalculatorContext'

const useStyles = makeStyles((theme) => ({
  body:{
    backgroundColor: '#f2f2f3',
    borderRadius: '6px',
    border: '4px inset grey',
    marginBottom: '20px',
    boxSizing:'border-box',
    padding: '8px 8px 4px',
    
  },
  text:{
    textAlign: 'right',
    fontWeight: 'bold',
  }
}))

const Display: FC = () => {  
  const classes = useStyles()
  const {data} = useContext(CalculatorContext)
  return (
    <Box p={1} className={classes.body} >
      <Typography component={'div'} className={classes.text} >{data?.equation}</Typography>
      <Typography component={'div'} className={classes.text}  id={'display'} >{data?.result}</Typography>
    </Box>
  )
}

export default Display
