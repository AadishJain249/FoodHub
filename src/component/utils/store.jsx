import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
const store = configureStore({
    reducer:{
        cart:cartSlice,
        auth:authSlice
    }
});
export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import authSlice from './authSlice';
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import cartSlice from './cartSlice';
// const persistConfig = { key: 'root', storage, version:1 };
// const persistedReducer = persistReducer(persistConfig, authSlice,cartSlice);
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//       }
//     })
// });
// export default store
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
