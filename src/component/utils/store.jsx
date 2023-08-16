import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        cart:cartSlice
    }
});
export default store;

/**
 * Redux *
 * 1. Create Store
 *    -> configureStore()
 *
 * 2. Provide this store to whole app
 * <Provider store={store_name}
 *
 * 3. Create Slice
 *  const cart_Slice=createSlice{
 *   name:
 *   initalState:
 *   reducers:
 *   {
 *      action name
 *   }
 * }
 * export const {action name}=cart_Slice.actions
 * export default cart_slice.reducer
 *
 * 4. put that slice into the store
 * {
 *  reducer:{
 *  slice_name created in slicecomponent:cart_Slice
 * }
 * }
 */
