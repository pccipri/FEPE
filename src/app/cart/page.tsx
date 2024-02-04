'use client';

import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../GlobalRedux/Features/counter/counterSlice";

export default function Cart() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <main>
            <button 
                className="btn btn-primary"
                onClick={() => dispatch(increment())}
            > Increment
            </button>
            <span>{count}</span>
            <button 
                className="btn btn-primary"
                onClick={() => dispatch(decrement())}
            > Decrement
            </button>
            <button 
                className="btn btn-primary"
                onClick={() => dispatch(incrementByAmount(2))}
            > Increment by 2
            </button>
        </main>
    )
}