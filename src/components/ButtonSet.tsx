import { Button } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import CalculatorContext from '../contexts/CalculatorContext'

interface ButtonSetProps{
  content: any[]
}

const ButtonSet: FC<ButtonSetProps> = (props) => {

  const {setButtonInput} = useContext(CalculatorContext)
  // onClick={()=>setEquation(element[0])}
  return (
    <div >
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
                {element[0]}
              </Button>
            )
          })
        }
      </div>
  )
}

export default ButtonSet
