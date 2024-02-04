import { UserType } from "./userType";

export type Order = {
    id?: Number;
    user_id: UserType;
    first_name: String;
    last_name: String;
    username: String;
    email: String;
    password: String;
    phone_number: String;
}