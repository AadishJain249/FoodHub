import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./src/component/Header.Jsx";
import { Body } from "./src/component/Body.jsx";
import About from "./src/component/About.jsx";
import { Footer } from "./src/component/Footer.jsx";
import Error from "./src/component/Error/Error.jsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./src/component/Contact";
import Resturant from "./src/component/Resturant/Resturant";
const AppLayout = () => {
  return (
    <>
      <Header></Header>
      {/* <About></About>  if path is /about*/}
      {/* if path is / it is body */}
      {/* All children will go in outlet */}
      <Outlet> </Outlet>
      <Footer></Footer>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>, // i want my about page to have footer and header also we can make by making
        // its children
      },
      ,
      {
        path: "/",
        element: <Body></Body>, // i want my about page to have footer and header also we can make by making
        // its children
      },
      {
        path: "/contact",
        element: <Contact></Contact>, // i want my about page to have footer and header also we can make by making
        // its children
      },
      {
        path:'/resturant/:id',
        element:<Resturant></Resturant>
      }
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
