import { INewUserInfo } from "../../../../../ts/interfaces/users/INewUserInfo";
import { IUser } from "../../../../../ts/interfaces/users/IUser";
import { IUserAddress } from "../../../../../ts/interfaces/users/IUserAddress";
import { IUserCompany } from "../../../../../ts/interfaces/users/IUserCompany";

export default function formatUser(userInfo:INewUserInfo,locationInfo:IUserAddress,companyInfo:IUserCompany):IUser {
    let user = {
        name:`${userInfo.firstname} ${userInfo.lastname}`,
        email: userInfo.email,
        phone: userInfo.phone,
        address:locationInfo,
        company:companyInfo
      } as IUser
    return user
}