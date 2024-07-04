import React from 'react'
import '../../../style/css/effects/underlineStyleEffect.css'
import { ICustomButton } from '../../../ts/interfaces/customButton/ICustomButton'
import { CustomButton } from './CustomButton'

export const DelayButton:React.FC<ICustomButton> = ({id, buttonText, handleClick}) => {
  return (
    <CustomButton id={id} className='underlineStyleEffect' buttonText={buttonText} handleClick={handleClick}/>
  )
}