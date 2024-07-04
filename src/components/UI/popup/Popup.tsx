import React from 'react'
import '../../../style/css/popup/popup.css'
import { ClosePopupButton } from './UI/ClosePopupButton'

type TPopupProps = {
    children:React.ReactNode,
    setPopupStatus:React.Dispatch<React.SetStateAction<boolean>>
}

export const Popup:React.FC<TPopupProps> = ({children,setPopupStatus}) => {
  return (
    <div className='popupContainer' onClick={() => setPopupStatus(false)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <ClosePopupButton setPopupStatus={setPopupStatus}/>
        {children}
      </div>
    </div>
  )
}