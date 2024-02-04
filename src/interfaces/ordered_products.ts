import { Order } from "./order";
import { Product } from "./product";

export type Ordered_Product = {
    id?: Number;
    order_id: Order;
    product_id: Product;
    quantity: Number;
}