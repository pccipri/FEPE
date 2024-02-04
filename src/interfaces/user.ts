import { UserType } from "./userType";

export type User = {
    id?: number;
    type: UserType
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    phone_number: string;
}