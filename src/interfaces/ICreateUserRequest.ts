import {Contact} from "./Contact.interface.ts";
import {Address} from "./Address.interface.ts";
import {UserType} from "../enums/UserType.enum.ts";

export interface ICreateUserRequest {
    contact: Contact,
    address: Address,
    password: string,
    userType: UserType
}