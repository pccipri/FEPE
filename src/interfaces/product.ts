import { Category } from "./category";

export type Product = {
    id?: number;
    category_id: Category;
    name: string;
    description: string;
    image: string;
    price: number;
}