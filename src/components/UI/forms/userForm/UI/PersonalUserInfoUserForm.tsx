import React from 'react'
import '../../../../../style/css/UI/forms/UI/personalUserInfoUserForm.css'
import { INewUserInfo } from '../../../../../ts/interfaces/users/INewUserInfo'
import { CustomButton } from '../../../buttons/CustomButton'
import { CustomInput } from '../../../inputs/CustomInput'

type TPersonalUserInfoUserForm = {
    setUserInfo:React.Dispatch<React.SetStateAction<INewUserInfo>>,
    userInfo: INewUserInfo,
    addNewUser:() => void,
    isButtonActive:boolean
}

type TInputStatus = {
    firstname:boolean,
    lastname:boolean,
    email:boolean,
    phone:boolean
}

export const PersonalUserInfoUserForm:React.FC<TPersonalUserInfoUserForm> = ({setUserInfo,userInfo,addNewUser,isButtonActive}) => {

    const inputStatus:TInputStatus = {
        firstname:userInfo.firstname ? true : false,
        lastname:userInfo.lastname ? true : false,
        email:userInfo.email ? true : false,
        phone:userInfo.phone ? true : false
    }

    const setFirstname = (e:React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo,firstname:e.target.value})
    const setLastname = (e:React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo,lastname:e.target.value})
    const setEmail = (e:React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo,email:e.target.value})
    const setPhone = (e:React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo,phone:e.target.value})

  return (
    <div className='personaluserInfoUserForm'>
      <CustomInput maxLength={25} value={userInfo.firstname} type='text' placeholder={'Firstname*'} className={`${inputStatus.firstname}`} id='userFirstnameTextInput' changeHandler={setFirstname}/>
      <CustomInput maxLength={25} value={userInfo.lastname} type='text' placeholder={'Lastname*'} className={`${inputStatus.lastname}`} id='userLastnameTextInput' changeHandler={setLastname}/>
      <CustomInput maxLength={25} value={userInfo.email} type='text' placeholder={'Email*'} className={`${inputStatus.email}`} id='userEmailTextInput' changeHandler={setEmail}/>
      <CustomInput value={userInfo.phone} type='number' placeholder={'Phone*'} className={`${inputStatus.phone}`} id='userPhoneNumberInput' changeHandler={setPhone}/>
      <CustomButton disabled={isButtonActive} id={'handleAddNewUserButton'} handleClick={addNewUser} buttonText='Save'/>
    </div>
  )
}