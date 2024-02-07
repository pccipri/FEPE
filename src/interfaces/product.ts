import { Category } from "./category";
import { RequestDTO } from "./requestDTO";

export type Product<T = Category | RequestDTO> = {
    id?: number;
    category_id: T;
    name: string;
    description: string;
    image: string;
    price: number;
}