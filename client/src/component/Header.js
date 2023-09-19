import logo from "../../images/logo-main.png";
import cart from "../../images/cart.png";
import profile from "../../images/profile.png";
import home from "../../images/home.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Header.css'
import users from "./utils/users";
import { useNavigate } from "react-router-dom";
import {
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';

import { useDispatch } from "react-redux";
export const ImgComponent = ({ item, itemname }) => {
  return (
      <img className={itemname} alt={itemname} src={item} />
  );
};

export const Title = () => {
  return <ImgComponent item={logo} itemname={"logo"} />;
};
import { logout } from "./utils/authSlice";
import { removeCart } from "./utils/cartSlice";
import { useEffect, useState } from "react";
export const NavComponent = () => {
  const theme = {
    width: "50px",
    height: "50px",
  };
  // const cart_items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const {items} = useSelector((store) => store.cart);
  const {users} = useSelector((store) => store.auth);
  console.log(users);
  const handleLogout = () => 
  {
    dispatch(logout());
    Navigate("/login");
    localStorage.removeItem("IsLogin",false)
    localStorage.removeItem("user","")
    dispatch(removeCart())
  };
  const user=localStorage.getItem("user")
  // console.log(user);
  return (
    <div className="nav-items">
      <ul>
        <li>
          {" "}
          <Link to="/cart">

            {" "}
            {user!=null?<img style={theme} src={home}></img>:""}
          </Link>
        </li>
          {" "}
        <li className="carts1">
        {user!=null?<p className="carts">{items.length}</p>:""}
          {user!=null?<Link to="/cartItems">
            <img style={theme} src={cart} />
          </Link>:""}
        </li>
        <li>
          {" "}
          <Link to="/">
            {user==null?<img style={theme} src={profile} />:""}
          </Link>
        </li>
        <li>
        {user!=null?
          <FormControl variant="standard" value={user ? user : ""}>
            <Select
              value={user ? user : ""}
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
              <MenuItem value={user? user : ""}>
                <Typography>{user ? user : ""}</Typography>
              </MenuItem>
              {user!=null?<MenuItem onClick={handleLogout}>Log Out</MenuItem>:""}
            </Select>
          </FormControl>:""}
        </li>

      </ul>
    </div>
  )
}
const Header = () => {
//   const [auth,isAuth]=useState(localStorage.getItem("IsLogin"))
//   useEffect(() => {
//     const onStorage = () => {
//         isAuth = localStorage.getItem('IsLogin');
//     };

//     window.addEventListener('storage', onStorage);

//     return () => {
//         window.removeEventListener('storage', onStorage);
//     };
// }, []);
  // console.log(auth);
  return (
    <>
      (
        <div className="header">
          <Title />
          <NavComponent />
        </div>
         )
      
    </>
  );
};

export default Header;