import logo from "../../images/logo-main.png";
import cart from "../../images/cart.png";
import profile from "../../images/profile.png";
import home from "../../images/home.png";
import { Button } from "@mui/material";
import { useContext } from "react";
import userContext from "./utils/useContext";
import { useSelector } from "react-redux";
// import LoginIcon from "@mui/icons-material/Login";
// import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "./utils/store";

export const ImgComponent = ({ item, itemname }) => {
  return (
    <a href="/">
      {" "}
      <img className={itemname} alt={itemname} src={item} />{" "}
    </a>
  );
};

export const Title = () => {
  return <ImgComponent item={logo} itemname={"logo"} />;
};

export const NavComponent = () => {
  const theme = {
    width: "50px",
    height: "50px",
  };
  const cart_items = useSelector((store) => store.cart.items);
  return (
    <div className="nav-items">
      <ul>
        <li>
          {" "}
          <Link to="/about">
            {" "}
            <img style={theme} src={home}></img>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/cartItems">
            <img style={theme} src={cart} />
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/">
            <img style={theme} src={profile} />
          </Link>
        </li>
        {/* <li>
          {" "}
          <Link to="/insta">
            <img style={theme} src={profile} />
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export const Header = () => {
  const themeStyle = {
    maxWidth: "100px",
    maxHeight: "40px",
    margin: "15px",
    background: "#FFC300",
    color: "black",
    fontWeight: "bolder",
  };
  const [logged, Islogged] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className="header">
      <Title />
      <NavComponent />
      {/* {logged ? (
        <Button
          style={themeStyle}
          variant="outlined"
          startIcon={<LoginIcon />}
          onClick={() => Islogged(false)}
        >
          Login
        </Button>
      ) : (
        <Button
          style={themeStyle}
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={() => Islogged(true)}
        >
          Logout
        </Button>
      )} */}
    </div>
  );
};

export default Header;
