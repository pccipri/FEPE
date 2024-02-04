import { User } from "./user";

export type Message = {
    id?: Number;
    user_id: User;
    message: String;
}