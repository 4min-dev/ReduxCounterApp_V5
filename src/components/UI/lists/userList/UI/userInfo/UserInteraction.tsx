import React from 'react'
import { DeleteButton } from '../../../../buttons/DeleteButton'
import { fetchAPI } from '../../../../../../redux/services/fetchAPI'
import { EditButton } from '../../../../buttons/EditButton'
import { IUser } from '../../../../../../ts/interfaces/users/IUser'

type TUserInteractionProps = {
  user:IUser,
  setUserEditable:React.Dispatch<React.SetStateAction<boolean>>,
  userEditable:boolean
}

export const UserInteraction:React.FC<TUserInteractionProps> = ({user,setUserEditable,userEditable}) => {

  const [deleteUser] = fetchAPI.useDeleteUserMutation()

  const deleteUserById = () => deleteUser(user.id)

  const getUserId = typeof user.id === 'string' ? String(user.id.match(/[0-9]/g)).replace(/,/g,'') : user.id

  return (
    <div className='userInteraction'>
      <h3>ID: {getUserId}</h3>
      <img src={'incgntUserAvatar.png'} alt='user_avatar'/>
     <div className='uiInteractionWithUserButtons'>
      <DeleteButton id='deleteUserButton' handleClick={deleteUserById}/>
      <EditButton id='editUserButton' handleClick={() => setUserEditable(!userEditable)}/>
     </div>
    </div>
  )
}