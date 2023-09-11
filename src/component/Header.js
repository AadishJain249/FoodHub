import logo from "../../images/logo-main.png";
import cart from "../../images/cart.png";
import profile from "../../images/profile.png";
import home from "../../images/home.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import store from "./utils/store";
import { useNavigate } from "react-router-dom";
import {
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';

// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const ImgComponent = ({ item, itemname }) => {
  return (
    <a href="/cart">
      {" "}
      <img className={itemname} alt={itemname} src={item} />{" "}
    </a>
  );
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
  const cart_items = useSelector((store) => store.cart.items);
  
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const {items} = useSelector((store) => store.cart);
  console.log(items);
  const {users} = useSelector((store) => store.auth);
  console.log(users);
  const handleLogout = () => 
  {
    dispatch(logout());
    Navigate("/login");
    dispatch(removeCart())
  };
  return (
    <div className="nav-items">
      <ul>
        <li>
          {" "}
          <Link to="/cart">

            {" "}
            <img style={theme} src={home}></img>
          </Link>
        </li>
          {" "}
        <li className="carts1">
          <p className="carts">{items.length}</p>{" "}
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
        <li>
          <FormControl variant="standard" value={users ? users.name : ""}>
            <Select
              value={users ? users.name : ""}
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
              <MenuItem value={users ? users.name : ""}>
                <Typography>{users ? users.name : ""}</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </li>

      </ul>
    </div>
  )
}
const Header = () => {

  const {flag}  = useSelector((store) => store.auth);
  console.log(flag);
  return (
    <>
      {/* {flag ? ( */}
        <div className="header">
          <Title />
          <NavComponent />
        </div>
      {/* ) : ( */}
        {/* "" */}
      {/* )} */}
    </>
  );
};

export default Header;