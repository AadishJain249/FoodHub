import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
<<<<<<< HEAD
        items:[]
=======
        items:["aad"],
        getItems:0
>>>>>>> 2c8b8e4 (Mern Done)
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
<<<<<<< HEAD
        }
    }
})
export const {addItem,removeItem,removeCart}=cartSlice.actions;
=======
        },
        getLength:(state)=>{
            state.getItems=state.items.length
        }
    }
})
export const {addItem,removeItem,removeCart,getLength}=cartSlice.actions;
>>>>>>> 2c8b8e4 (Mern Done)
export default cartSlice.reducer;