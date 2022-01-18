// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

// export const INCREMENT = "INCREMENT";
// export const DECREMENT = "DECREMENT";
// export const TOGGLE = "TOGGLE";

// const counterReducer = (store = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...store, counter: store.counter + action.value };
//     case DECREMENT:
//       return { ...store, counter: store.counter - 1 };
//     case TOGGLE:
//       return { ...store, showCounter: !store.showCounter };
//     default:
//       return store;
//   }
// };

// const store = configureStore({ reducer: counterSlice.reducer });
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
