import React from 'react'
import '../../../../style/css/UI/forms/newUserForm.css'
import { INewUserInfo } from '../../../../ts/interfaces/users/INewUserInfo'
import { IUserAddress } from '../../../../ts/interfaces/users/IUserAddress'
import { IUserCompany } from '../../../../ts/interfaces/users/IUserCompany'
import { PersonalUserInfoUserForm } from './UI/PersonalUserInfoUserForm'
import { PersonalUserAddressUserForm } from './UI/PersonalUserAddressUserForm'
import { PersonalUserCompanyUserForm } from './UI/PersonalUserCompanyUserForm'
import { IUser } from '../../../../ts/interfaces/users/IUser'

type TNewUserFormProps = {
  newUserHandler:(user:IUser) => void | Promise<any>,
  formatUserHandler:(userInfo:INewUserInfo,locationInfo:IUserAddress,companyInfo:IUserCompany,userId?:string | number) => IUser,
  userId?:number | string,
  id?:string
}

export const NewUserForm:React.FC<TNewUserFormProps> = ({newUserHandler,formatUserHandler,userId,id}) => {

  let [userInfo,setUserInfo] = React.useState<INewUserInfo>({firstname:'', lastname:'', email:'', phone:''})
  let [locationInfo,setLocationInfo] = React.useState<IUserAddress>({city:'',street:'',suite:''})
  let [companyInfo,setCompanyInfo] = React.useState<IUserCompany>({name:'',catchPhrase:'',bs:''})

  const addNewUserContent = async() => {
    const user = formatUserHandler(userInfo,locationInfo,companyInfo,userId)
    userId ? user.id = userId : user.id = String(Date.now())
    await newUserHandler(user)
    
    setUserInfo({firstname:'',lastname:'',email:'',phone:''})
    setLocationInfo({city:'',street:'',suite:''})
    setCompanyInfo({name:'',catchPhrase:'',bs:''})
  }

  const isButtonActive =
      !userInfo.firstname || !userInfo.lastname || !userInfo.email || !userInfo.phone ||
      !locationInfo.city || !locationInfo.street || !locationInfo.suite ||
      !companyInfo.name || !companyInfo.catchPhrase || !companyInfo.bs
      ? true
      : false

  return (
    <form className='newUserFormContainer' id={id}>
      <PersonalUserAddressUserForm setLocationInfo={setLocationInfo} locationInfo={locationInfo}/>
      <PersonalUserInfoUserForm setUserInfo={setUserInfo} userInfo={userInfo} addNewUser={addNewUserContent} isButtonActive={isButtonActive}/>
      <PersonalUserCompanyUserForm setCompanyInfo={setCompanyInfo} companyInfo={companyInfo}/>
    </form>
  )
}