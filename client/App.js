import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/component/Header.js";
import { Body } from "./src/component/Body.jsx";
import Signup from "./src/component/Signup/Signup.jsx";
import Login from "./src/component/Login/Login.jsx";
import Error from "./src/component/Error/Error.jsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Resturant from "./src/component/Resturant/Resturant.jsx";
import { Provider } from "react-redux";
import store from "./src/component/utils/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItem from "./src/component/CartItem/CartItem.jsx";
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
      <ToastContainer />

      <Provider store={store}>
      
        <Header></Header>
        <Outlet> </Outlet>
      </Provider>
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
      {
        path: "/cart",
        element: <Body></Body>, 
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
        path: "/resturant/:id",
        element: <Resturant></Resturant>,
      },
      {
        path: "/cartItems",
        element: <CartItem></CartItem>, 
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);