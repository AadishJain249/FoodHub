import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./src/component/Header.jsx";
import { Body } from "./src/component/Body.jsx";
import About from "./src/component/About.jsx";
import { Footer } from "./src/component/Footer.jsx";
import Error from "./src/component/Error/Error.jsx";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./src/component/Contact";
import Shimmer from "./Shimmer";
import Resturant from "./src/component/Resturant/Resturant.jsx";
import userContext from "./src/component/utils/useContext.jsx";
import { Provider } from "react-redux";
import store from "./src/component/utils/store"
import CartItem from "./src/component/CartItem/CartItem.jsx";
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
const InstaMart = lazy(() => import("./src/component/InstaMart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "aadi",
    email: "aadi@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
      <userContext.Provider
        value={{
          user: user,
          setUser:setUser
        }}
      >
        <Header></Header>
        {/* <About></About>  if path is /about*/}
        {/* if path is / it is body */}
        {/* All children will go in outlet */}
        <Outlet> </Outlet>
        <Footer></Footer>
      </userContext.Provider>
      </Provider>
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
        path: "/resturant/:id",
        element: <Resturant></Resturant>,
      },
      {
        path: "/insta",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <InstaMart></InstaMart>
          </Suspense>
        ),
      },
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
