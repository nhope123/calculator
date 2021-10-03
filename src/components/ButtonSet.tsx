import {Button, makeStyles, Typography } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import CalculatorContext from '../contexts/CalculatorContext'
import clsx from 'clsx'

interface ButtonSetProps{
  content: any[]
}
const REGULAR_WIDTH = '50px'

const useStyles = makeStyles((theme) => ({
  "MuiButton-root":{
    minWidth: '0px',
  },
  common:{
    boxSizing: 'border-box',
    margin:'5px',
    padding: '0',
    border: '2px outset #4b4b4e',
    borderRadius: '8px',
    boxShadow: '2px 2px 4px grey',
    '&:active':{
      border: '3px inset #4b4b4e'
    }
  },
  regular:{
    width: REGULAR_WIDTH,
    height: '56px',
  },
  vertical:{
    width: REGULAR_WIDTH,
  },
  horizontal:{
    height: '56px',
    width: '110px',
  },  
  reset:{
    backgroundColor: '#fd823f',
    color: 'black',  
    '&:hover':{
      backgroundColor: '#fead81',
    }  
  },
  text:{
    fontWeight: 'bold',
  },
  sign:{
    backgroundColor: '#295875',
    color: 'white',
    '&:hover':{
      backgroundColor: '#428ebd'
    }
  },
  number:{
    backgroundColor: '#57575c',
    color: 'white',
    '&:hover':{
      backgroundColor: '#898990',      
    },
    
  }
}))


const ButtonSet: FC<ButtonSetProps> = (props) => {

  const classes = useStyles()
  
  const {setButtonInput} = useContext(CalculatorContext)
  return (
    < >
        {
          props.content.map(element =>{
            const propsStyle = (element[2]=== 'regular')? classes.regular:
                                (element[2]=== 'vertical')? classes.vertical: classes.horizontal
            const propsColor = (element[3] === 'reset')?classes.reset:
                                (element[3] === 'sign')?classes.sign: classes.number
            return (
              <Button component={'div'}
                      className={clsx([propsStyle,propsColor,classes['MuiButton-root'], classes.common])}             
                      variant={'contained'} 
                      key={element[1]} 
                      id={element[1]}
                      onClick={()=>setButtonInput(element[0])} 
                      tabIndex={0} 
                      >
                <Typography className={clsx([classes.text])}>{element[0]}</Typography>
              </Button>
            )
          })
        }
      </>
  )
}

export default ButtonSet
