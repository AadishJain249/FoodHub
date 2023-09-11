import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:["aad"],
        getItems:0
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        removeCart:(state)=>{
            state.items=[]
        }
    }
})

export const {addItem,removeItem,removeCart,getLength}=cartSlice.actions;
export default cartSlice.reducer;