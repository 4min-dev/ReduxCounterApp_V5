import React from 'react'

type TCustomInput = {
    value?:string,
    type:string,
    placeholder:string,
    className:string,
    id:string,
    maxLength?:number,
    changeHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomInput:React.FC<TCustomInput> = ({value, type, placeholder, className, id, maxLength, changeHandler}) => {
  return (
    <input maxLength={maxLength} value={value} type={type} placeholder={placeholder} className={className} id={id} onChange={(e) => changeHandler(e)}/>
  )
}