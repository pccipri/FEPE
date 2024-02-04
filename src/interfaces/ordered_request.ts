import { Order } from "./order";

export type Ordered_Product = {
    newOrder: Order;
    productIds: number[];
    quantities: number[];
}
