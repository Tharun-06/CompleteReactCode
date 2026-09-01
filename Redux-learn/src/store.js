// import {createStore} from "redux"

// //Initial state
// const initialState = {
//     user: {
//         username: "Teju",
//         balance: 5000,
//     },
// };

// //Action 
// export const addMoney = (amt) =>({
//     type: "addMoney",
//     payload: amt,
// });
// export const removeMoney = (amt) =>({
//     type: "removeMoney",
//     payload: amt,
// });

// function reduser(state = initialState, action) {
//     switch(action.type) {
//         case "addMoney":
//             return {
//                 user: {
//                     username: state.user.username,
//                     balance: state.user.balance + action.payload
//                 },
//             };
//         case "removeMoney":
//             return {
//                 user: {
//                     username: state.user.username,
//                     balance: state.user.balance - action.payload
//                 },
//             };
//             default:
//                 return state;
//     }
// }
// const store = createStore(reduser);
// export default store;

// Modern Redux Toolkit Implementation
import { configureStore, createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "Tharun",
        balance: 20000,
    },

    reducers: {
        addMoney: (state, action) => {
            state.balance += action.payload;
        },
        removeMoney: (state, action) => {
            state.balance -= action.payload;
        }
    },
});
export const { addMoney, removeMoney } = userSlice.actions;
const store = configureStore({
    reducer: { user: userSlice.reducer },
});
export default store;