import React from 'react'
import '../../../../style/css/popup/UI/closePopupButton.css'

type TClosePopupButtonProps = {
    setPopupStatus:React.Dispatch<React.SetStateAction<boolean>>
}

export const ClosePopupButton:React.FC<TClosePopupButtonProps> = ({setPopupStatus}) => {
  return (
    <button type='button' className='closePopupButton' onClick={() => setPopupStatus(false)}>
        X
    </button>
  )
}