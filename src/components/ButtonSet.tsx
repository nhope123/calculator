import { Button } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import { CalculatorContext } from '../contexts/CalculatorContext'

interface ButtonSetProps{
  content: any[]
}

const ButtonSet: FC<ButtonSetProps> = (props) => {

  const {setEquation} = useContext(CalculatorContext)
  return (
    <div >
        {
          props.content.map(element =>{
            return (
              <Button 
                      variant={'contained'} 
                      key={element} 
                      onClick={()=>setEquation(element)} 
                      tabIndex={0} 
                      >
                {element}
              </Button>
            )
          })
        }
      </div>
  )
}

export default ButtonSet
