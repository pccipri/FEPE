import { Category } from "./category";

export type Product = {
    id?: Number;
    category_id: Category;
    name: String;
    description: String;
    image: String;
    price: Number;
}