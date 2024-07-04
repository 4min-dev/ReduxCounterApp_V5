import React from 'react'

type TEditButtonProps = {
    id:string,
    handleClick:() => void 
}

export const EditButton:React.FC<TEditButtonProps> = ({id,handleClick}) => {

  return (
    <button type='button' className='editButton' id={id} onClick={handleClick}>
      <img src={'editIcon.png'} alt='edit'/>
    </button>
  )
}