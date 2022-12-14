import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const initialAuthState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        },
    },
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

/* auth: authSlice.reducer,
}, */

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

/* 
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    if (action.type === "increment") {
        return { ...state, counter: state.counter + action.amount };
    }
    if (action.type === "decrement") {
        return { ...state, counter: state.counter - 1 };
    }

    if (action.type === "toggleCounter") {
        return { ...state, showCounter: !state.showCounter };
    }

    return state;
};

const store = createStore(counterReducer);

 */
