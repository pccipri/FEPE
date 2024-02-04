import { UserType } from "./userType";

export type User = {
    id?: Number;
    type: UserType
    first_name: String;
    last_name: String;
    username: String;
    email: String;
    password: String;
    phone_number: String;
}