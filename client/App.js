import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/component/Header.js";
import { Body } from "./src/component/Body.jsx";
// import About from "./src/component/About.jsx";
// import { Footer } from "./src/component/Footer.jsx";
import Signup from "./src/component/Signup/Signup.jsx";
import Login from "./src/component/Login/Login.jsx";
import { persistStore } from "redux-persist";
import Error from "./src/component/Error/Error.jsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// import Contact from "./src/component/Contact";
import Shimmer from "./Shimmer";
import Resturant from "./src/component/Resturant/Resturant.jsx";
// import userContext from "./src/component/utils/useContext.jsx";
import { Provider } from "react-redux";
import store from "./src/component/utils/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItem from "./src/component/CartItem/CartItem.jsx";
import About from "./src/component/About";
import Profile from "./src/component/Profile";
// import { PersistGate } from "redux-persist/integration/react";
// now we have d2 files insta mart and my bundle file
// import Resturant from "./src/component/Resturant/Resturant";
// imagine if there are 1000 of components in our app
// all components are bundled in a single file
// supppose i go the menu only  menu content is needed all other component will also get load which
// are loaded
// this can be done by doing
// 1.code spiliting
// 2.lazy loading
// 3.dynamic import
// 4.on demand loading
// 5.chunking
// react provides us lazy suspsense to do optimization
// so instead of normal import we will be doing like this
// const InstaMart = lazy(() => import("./src/component/InstaMart"));
const AppLayout = () => {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
      
        {/* <Header></Header> */}
        {/* <About></About>  if path is /about*/}
        {/* if path is / it is body */}
        {/* All children will go in outlet */}
        <Outlet> </Outlet>
        {/* <Footer></Footer> */}
        {/* </PersistGate> */}
      </Provider>
      {/* </ToastContainer> */}
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      ,
      // {
      //   path: "/about",
      //   element: <About></About>, // i want my about page to have footer and header also we can make by making
      //   // its children
      // },
      {
        path: "/cart",
        element: <Body></Body>, // i want my about page to have footer and header also we can make by making
        // its children
      },
      {
        path: "/",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element:<About></About>,
        children:[{
          path:'profile',
          element:<Profile></Profile>
        }
        ]
      },
      {
        path: "/resturant/:id",
        element: <Resturant></Resturant>,
      },
      // {
      //   path: "/insta",
      //   element: (
      //     <Suspense fallback={<Shimmer></Shimmer>}>
      //       <InstaMart></InstaMart>
      //     </Suspense>
      //   ),
      // },
      {
        path: "/cartItems",
        element: <CartItem></CartItem>, // i want my about page to have footer and header also we can make by making
        // its children
      },
    ],
  },
  // no need to specify it if we have multiple roots and want some compoents to be always there
  // {
  //   path:"/about",
  //   element:<About></About>, // i want my about page to have footer and header also we can make by making
  //   // its children
  // }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);