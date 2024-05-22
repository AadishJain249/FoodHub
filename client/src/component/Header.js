import logo from "../../images/logo-main.png";
import cart from "../../images/cart.png";
import online from "../component/assets/online.png";
import offline from "../component/assets/download.png";

import profile from "../../images/profile.png";
import home from "../../images/home.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import {
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
export const ImgComponent = ({ item, itemname }) => {
  return <img className={itemname} alt={itemname} src={item} />;
};

export const Title = () => {
  return <ImgComponent item={logo} itemname={"logo"} />;
};
import { logout } from "./utils/authSlice";
import { removeCart } from "./utils/cartSlice";
export const NavComponent = () => {
  const theme = {
    width: "50px",
    height: "50px",
  };
  const [auth, isAuth] = useState(localStorage.getItem("IsLogin"));
  useEffect(() => {
    const onStorage = () => {
      isAuth = localStorage.getItem("IsLogin");
    };
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  console.log(auth);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { items } = useSelector((store) => store.cart);
  const { users } = useSelector((store) => store.auth);
  const handleLogout = () => {
    dispatch(logout());
    Navigate("/login");
    localStorage.setItem("IsLogin", false);
    localStorage.setItem("user", "");
    dispatch(removeCart());
  };
  const user = localStorage.getItem("IsLogin");
  const name = localStorage.getItem("user");
  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/cart">
            {user != null ? <img style={theme} src={home}></img> : ""}
          </Link>
        </li>
        <li className="carts1">
          {user != null ? <p className="carts">{items.length}</p> : ""}
          {user != null ? (
            <Link to="/cartItems">
              <img style={theme} src={cart} />
            </Link>
          ) : (
            ""
          )}
        </li>
        <li className="carts1">
          {auth == "true" ? (
            <img style={theme} src={online} />
          ) : (
            <img style={theme} src={offline} />
          )}
        </li>
        <li>
          {/* <Link to="/">
            <img style={theme} src={profile} />
          </Link> */}
        </li>
        <li className="name">
          {user != null ? (
            <FormControl variant="standard" value={user ? user : ""}>
              <Select
                value={user ? name : ""}
                sx={{
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {},
                }}
                input={<InputBase />}
              >
                <MenuItem value={user ? name : ""}>
                  <Typography>{user ? name : ""}</Typography>
                </MenuItem>
                {user != null ? (
                  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                ) : (
                  ""
                )}
              </Select>
            </FormControl>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};
const Header = () => {
  return (
    <>
      (
      <div className="header">
        <div className="head">
          <Title></Title>
        </div>
        <NavComponent />
      </div>
      )
    </>
  );
};

export default Header;
