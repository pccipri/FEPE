'use client';

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Features/counter/cartSlice';

export const store = configureStore({
    reducer: {
        counter: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;