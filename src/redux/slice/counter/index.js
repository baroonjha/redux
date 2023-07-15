import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'counter',
    initialState:0,
    //ye counterSlice ka reducer hai
    reducers:{
            increment:(state)=>state+1,
            decrement:(state)=>state-1
    }
})

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;
