import React, { MouseEvent } from 'react'
import '../../../style/css/UI/buttons/customButton.css'
import { ICustomButton } from '../../../ts/interfaces/customButton/ICustomButton'

export const CustomButton:React.FC<ICustomButton> = ({id,className,buttonText,handleClick,disabled}) => {

    function customBtnClickHandler(e:MouseEvent<HTMLButtonElement>,handler:() => void) {
        e.preventDefault()
        handler()
    }

  return (
    <button disabled={disabled} type='button' className={className ? `customButton ${className}` : 'customButton'} id={id} onClick={(e) => customBtnClickHandler(e,handleClick)}>
      {buttonText}
    </button>
  )
}