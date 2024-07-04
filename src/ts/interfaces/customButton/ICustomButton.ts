export interface ICustomButton {
    id?:string,
    className?:string,
    buttonText?:string,
    handleClick:() => void,
    disabled?:boolean
}