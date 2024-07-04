import React from 'react'
import '../../../style/css/sections/usersSection/userSection.css'
import '../../../style/css/effects/underlineStyleEffect.css'
import List from '../../UI/lists/List'
import { UserList } from '../../UI/lists/userList/UserList'
import { IUser } from '../../../ts/interfaces/users/IUser'
import { ContentLoader } from '../../UI/loaders/ContentLoader'
import { ErrorInterface } from '../../UI/errors/ErrorInterface'
import { GreenStyleButton } from '../../UI/buttons/GreenStyleButton'
import { fetchAPI } from '../../../redux/services/fetchAPI'
import { NewUserForm } from '../../UI/forms/userForm/NewUserForm'
import { CustomButton } from '../../UI/buttons/CustomButton'
import { Popup } from '../../UI/popup/Popup'
import getErrorMessage from '../../../utils/functions/errorHandlers/getServerErrorMessage'
import formatUser from '../../UI/forms/userForm/utils/formatUser'
import { INewUserInfo } from '../../../ts/interfaces/users/INewUserInfo'
import { IUserAddress } from '../../../ts/interfaces/users/IUserAddress'
import { IUserCompany } from '../../../ts/interfaces/users/IUserCompany'

export const HomePageUsersSection:React.FC = () => {

  let [isReadyToLoad,setReadyStatus] = React.useState(false)
  let [hasAddUserPopup,setAddUserPopup] = React.useState(false)

  const {data:users,error,isLoading} = fetchAPI.useGetUsersQuery('', {
    skip:!isReadyToLoad
  })
  
  const [addUser, {}] = fetchAPI.useAddUserMutation()
  const addUserHandler = (user:IUser) => {
    addUser(user)
    setAddUserPopup(false)
  }

  const loadUsers = () => setReadyStatus(true)

  const formatNewUser = (userInfo:INewUserInfo,locationInfo:IUserAddress,companyInfo:IUserCompany):IUser => {
    return formatUser(userInfo,locationInfo,companyInfo)
  }

  return (
    <section className='homePageUsersSection'>
      { isLoading && <ContentLoader/> }
      { error && <ErrorInterface error={getErrorMessage(error)}/> }
      {
         users
         ? users.length > 0 
            ? <List listContainerName={'userListContainer'} items={users} renderItem={(user:IUser) => <UserList user={user} key={user.id}/>}/> 
            : <ErrorInterface error='No users found' canReload={false}/>
         : <GreenStyleButton handleClick={loadUsers} buttonText='Load clients'/>
      }
      { hasAddUserPopup 
      ? <Popup setPopupStatus={setAddUserPopup}>
          <NewUserForm newUserHandler={addUserHandler} formatUserHandler={formatNewUser}/>
        </Popup> 
      : <CustomButton id='addNewUserButton' className='underlineStyleEffect' handleClick={() => setAddUserPopup(!hasAddUserPopup)} buttonText='New user'/>}
    </section>
  )
}