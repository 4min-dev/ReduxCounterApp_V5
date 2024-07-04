import React from 'react'

type TDeleteButtonProps = {
    id:string,
    handleClick:() => void
}

export const DeleteButton:React.FC<TDeleteButtonProps> = ({id,handleClick}) => {
  return (
    <button type='button' className='deleteButton' id={id} onClick={handleClick}>
      <img src={'deleteIcon.png'} alt='delete'/>
    </button>
  )
}