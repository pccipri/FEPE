import { UserType } from "./userType";

export type Order = {
    id?: number;
    user_id: UserType;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    phone_number: string;
}