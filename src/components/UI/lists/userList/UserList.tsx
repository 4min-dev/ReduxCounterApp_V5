import React from 'react'
import '../../../../style/css/lists/userList.css'
import '../../../../style/css/adaptive/lists/userList/userListAdaptive.css'
import { UserInfo } from './UI/userInfo/UserInfo'
import { IUserObject } from '../../../../ts/interfaces/users/IUserObject'
import { UserInteraction } from './UI/userInfo/UserInteraction'
import { Popup } from '../../popup/Popup'
import { NewUserForm } from '../../forms/userForm/NewUserForm'
import { IUser } from '../../../../ts/interfaces/users/IUser'
import { fetchAPI } from '../../../../redux/services/fetchAPI'
import { INewUserInfo } from '../../../../ts/interfaces/users/INewUserInfo'
import { IUserAddress } from '../../../../ts/interfaces/users/IUserAddress'
import { IUserCompany } from '../../../../ts/interfaces/users/IUserCompany'
import formatUser from '../../forms/userForm/utils/formatUser'

export const UserList:React.FC<IUserObject> = ({user}) => {

  let [userEditable,setUserEditable] = React.useState(false)

  const [editUser, {}] = fetchAPI.useEditUserMutation()

  const editUserHandler = async(newUserContent:IUser) => {
      await editUser(newUserContent)
      setUserEditable(false)
  }

  const formatNewUser = (userInfo:INewUserInfo,locationInfo:IUserAddress,companyInfo:IUserCompany):IUser => {
    return formatUser(userInfo,locationInfo,companyInfo)
  }

  return(
    <div className='userList'>
      <UserInfo user={user}/>
      <UserInteraction user={user} setUserEditable={setUserEditable} userEditable={userEditable}/>
      {userEditable && 
      <Popup setPopupStatus={setUserEditable}>
        <NewUserForm newUserHandler={editUserHandler} formatUserHandler={formatNewUser} userId={user.id}/>
      </Popup>}
    </div>
  )
}