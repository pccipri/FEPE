import { RequestDTO } from "./requestDTO";
import { User } from "./user";

export type Message<T = User | RequestDTO> = {
    id?: number;
    user_id: T;
    message: string;
}