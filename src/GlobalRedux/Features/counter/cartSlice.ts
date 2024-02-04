import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItem } from "@/interfaces/cartItem";

export interface CartState {
  orderedProducts: cartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  orderedProducts: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addProductToCart: (state, action: PayloadAction<cartItem>) => {
      if (
        state.orderedProducts.filter(
          (orderProduct) =>
            orderProduct.product.id === action.payload.product.id
        ).length > 0
      ) {
        state.orderedProducts = state.orderedProducts.map((orderProduct) => {
          if (orderProduct.product.id === action.payload.product.id) {
            return { ...orderProduct, quantity: orderProduct.quantity + 1 };
          } else {
            return orderProduct;
          }
        });
      } else {
        state.orderedProducts = [...state.orderedProducts, action.payload];
      }
      state.totalPrice += Number(action.payload.product.price);
    },
    removeFromCart: (state, action: PayloadAction<cartItem>) => {
      if (action.payload.quantity - 1 >= 1) {
        state.orderedProducts = state.orderedProducts.map((orderProduct) => {
          if (orderProduct.product.id === action.payload.product.id) {
            return { ...orderProduct, quantity: orderProduct.quantity - 1 };
          } else {
            return orderProduct;
          }
        });
        state.totalPrice -= Number(action.payload.product.price);
      } else {
        state.orderedProducts = state.orderedProducts.filter(
          (orderProduct) =>
            orderProduct.product.id !== action.payload.product.id
        );
        state.totalPrice -= Number(action.payload.product.price);
      }
    },
    setCartTotal: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addProductToCart, setCartTotal, clearCart, removeFromCart} =
  cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOrderedProducts = (state: CartState) =>
  state.orderedProducts;
export const getTotalPrice = (state: CartState) => state.totalPrice;

export default cartSlice.reducer;