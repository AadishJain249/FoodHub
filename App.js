import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import   {Header}  from "./src/component/Header.Jsx";
import { Body} from "./src/component/Body.jsx";
import { Footer } from "./src/component/Footer.jsx";
const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
