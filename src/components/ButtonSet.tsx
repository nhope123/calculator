import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import CalculatorContext from '../contexts/CalculatorContext'

interface ButtonSetProps{
  content: any[]
}

const useStyles = makeStyles((theme) => ({
  regular:{
    width: '58px',
    height: '100%',
  }
}))


const ButtonSet: FC<ButtonSetProps> = (props) => {

  

  const {setButtonInput} = useContext(CalculatorContext)
  return (
    < >
        {
          props.content.map(element =>{
            return (
              <Button  
                      variant={'contained'} 
                      key={element[1]} 
                      id={element[1]}
                      onClick={()=>setButtonInput(element[0])} 
                      tabIndex={0} 
                      >
                <Typography>{element[0]}</Typography>
              </Button>
            )
          })
        }
      </>
  )
}

export default ButtonSet
