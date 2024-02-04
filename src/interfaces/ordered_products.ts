import { Order } from "./order";
import { Product } from "./product";

export type Ordered_Product = {
    id?: number;
    order_id: Order;
    product_id: Product;
    quantity: number;
}