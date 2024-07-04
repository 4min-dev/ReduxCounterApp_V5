import React from 'react'
import { IUserCompany } from '../../../../../ts/interfaces/users/IUserCompany'
import { CustomInput } from '../../../inputs/CustomInput'

type TPersonalUserCompanyUserForm = {
    setCompanyInfo:React.Dispatch<React.SetStateAction<IUserCompany>>,
    companyInfo: IUserCompany
}

type TInputStatus = {
    name: boolean,
    catchPhrase: boolean,
    bs: boolean
}

export const PersonalUserCompanyUserForm:React.FC<TPersonalUserCompanyUserForm> = ({setCompanyInfo,companyInfo}) => {

    const inputStatus:TInputStatus = {
        name:companyInfo.name ? true : false,
        catchPhrase:companyInfo.catchPhrase ? true : false,
        bs:companyInfo.bs ? true : false
    }

    const setCompanyName = (e:React.ChangeEvent<HTMLInputElement>) => setCompanyInfo({...companyInfo,name:e.target.value})
    const setCompanyCatchPhrase = (e:React.ChangeEvent<HTMLInputElement>) => setCompanyInfo({...companyInfo,catchPhrase:e.target.value}) 
    const setCompanyBs = (e:React.ChangeEvent<HTMLInputElement>) => setCompanyInfo({...companyInfo,bs:e.target.value}) 

  return (
    <div className='personalUserCompanyUserForm'>
        <CustomInput maxLength={25} value={companyInfo.name} type='text' placeholder={'Name*'} className={`${inputStatus.name}`} id='companyNameTextInput' changeHandler={setCompanyName}/>
        <CustomInput maxLength={25} value={companyInfo.catchPhrase} type='text' placeholder={'Catch phrase*'} className={`${inputStatus.catchPhrase}`} id='companyCatchPhraseTextInput' changeHandler={setCompanyCatchPhrase}/>
        <CustomInput maxLength={25} value={companyInfo.bs} type='text' placeholder={'Bs*'} className={`${inputStatus.bs}`} id='companyBsTextInput' changeHandler={setCompanyBs}/>
    </div>
  )
}