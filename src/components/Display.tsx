import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import CalculatorContext from '../contexts/CalculatorContext'

const useStyles = makeStyles((theme) => ({
  body:{
    backgroundColor: '#f2f2f3',
    borderRadius: '6px',
    border: '4px inset grey',
    marginBottom: '20px',
    padding: '8px 8px 4px',
    maxWidth: '240px',
    overflowX: 'scroll',  
    scrollbarColor: '#d9d9d9 #f2f2f3', 
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
    <Box className={classes.body} >
      <Typography  className={classes.text} >{data?.equation}</Typography>
      <Typography  className={classes.text}  id={'display'} >{data?.result}</Typography>
    </Box>
  )
}

export default Display
