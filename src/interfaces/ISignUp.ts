import {UserType} from "../enums/UserType.ts";

export interface ISignUp {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userType: UserType
}