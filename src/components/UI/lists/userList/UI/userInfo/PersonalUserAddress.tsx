import React from 'react'
import '../../../../../../style/css/UI/lists/userList/personalUserAddress.css'
import '../../../../../../style/css/adaptive/lists/userList/personalUserAddressAdaptive.css'
import { UserAddress } from './UserAddress'
import { IUserObject } from '../../../../../../ts/interfaces/users/IUserObject'

export const PersonalUserAddress:React.FC<IUserObject> = ({user}) => {
  return (
    <div className='addressInformation'>
        <img src={'location.png'} alt='location'/>
        <UserAddress user={user}/>
  </div>
  )
}