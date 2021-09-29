import { Button } from '@material-ui/core'
import React, { FC } from 'react'

interface ButtonSetProps{
  content: string[]
}

const ButtonSet: FC<ButtonSetProps> = (props) => {
  return (
    <div >
        {
          props.content.map(element =>{
            return (
              <Button variant={'contained'} key={element} onClick={()=>{}} tabIndex={0}  >
                {element}
              </Button>
            )
          })
        }
      </div>
  )
}

export default ButtonSet
