import { User } from "./user";

export type Message = {
    id?: number;
    user_id: User;
    message: string;
}