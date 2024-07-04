import React from 'react'
import { IUserAddress } from '../../../../../ts/interfaces/users/IUserAddress'
import { CustomInput } from '../../../inputs/CustomInput'

type TPersonalUserAddressUserForm = {
    setLocationInfo:React.Dispatch<React.SetStateAction<IUserAddress>>,
    locationInfo: IUserAddress
}

type TInputStatus = {
    street:boolean,
    suite:boolean,
    city:boolean
}

export const PersonalUserAddressUserForm:React.FC<TPersonalUserAddressUserForm> = ({setLocationInfo,locationInfo}) => {

    const inputStatus:TInputStatus = {
        street:locationInfo.street ? true : false,
        suite:locationInfo.suite ? true : false,
        city:locationInfo.city ? true : false
    }

    const setUserStreet = (e:React.ChangeEvent<HTMLInputElement>) => setLocationInfo({...locationInfo,street:e.target.value})
    const setUserSuite = (e:React.ChangeEvent<HTMLInputElement>) => setLocationInfo({...locationInfo,suite:e.target.value})
    const setUserCity = (e:React.ChangeEvent<HTMLInputElement>) => setLocationInfo({...locationInfo,city:e.target.value})

  return (
    <div className='personalUserAddressUserForm'>
      <CustomInput maxLength={25} value={locationInfo.street} type='text' placeholder={'Street*'} className={`${inputStatus.street}`} id='streetTextInput' changeHandler={setUserStreet}/>
      <CustomInput maxLength={25} value={locationInfo.suite} type='text' placeholder={'Suite*'} className={`${inputStatus.suite}`} id='suiteTextInput' changeHandler={setUserSuite}/>
      <CustomInput maxLength={25} value={locationInfo.city} type='text' placeholder={'City*'} className={`${inputStatus.city}`} id='cityTextInput' changeHandler={setUserCity}/>
    </div>
  )
}